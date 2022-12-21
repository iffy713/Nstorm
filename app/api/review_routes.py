from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Review, ReviewImage
from app.forms import ImageForm, ReviewForm
from app.s3_helpers import (upload_file_to_s3, allowed_file, get_unique_filename)

review_routes = Blueprint('reviews', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# ============== Get all reviews of current user =============
@review_routes.route('/current')
@login_required
def get_all_user_reviews():
    reviews = current_user.reviews
    print(reviews)
    output = []
    for review in reviews:
        output.append(review.to_dict_user_page())
    return {
        "Reviews": output
    }

# =========== Add an image to a review based on the review's id ===========
@review_routes.route('/<int:review_id>/images', methods=['POST'])
@login_required
def add_review_image(review_id):
    review_is_exist = Review.query.get(review_id)
    if not review_is_exist:
        return {
            "message": "Review couldn't be found.",
            "status_code": 404
        }, 404
    elif len(review_is_exist.review_images) == 5:
        return {
            "message": "Maximum number of images for this resource was reached.",
            "status_code": 403
        }, 403

    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files['image']

    if not allowed_file(image.filename):
        return { "errors": "file type not permitted" }, 400

    image.filename == get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload['url']
    # flask_login allows us to get the current user from the request
    review_image = ReviewImage(
        review_id = review_id,
        url = url
    )
    db.session.add(review_image)
    db.session.commit()
    return { "url": url }

    # form = ImageForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    #     review_image = ReviewImage(
    #         review_id = review_id,
    #         url = form.data['url']
    #     )
    #     db.session.add(review_image)
    #     db.session.commit()

    #     return review_image.to_dict()
    # return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# ============= Update a review ================
@review_routes.route('/<int:review_id>', methods=["PUT"])
@login_required
def update_review(review_id):
    review_is_exist = Review.query.get(review_id)
    if not review_is_exist:
        return {
            "message": "Review couldn't be found.",
            "status_code": 404
        }, 404
    else:
        form = ReviewForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            review_is_exist.headline = form.data['headline']
            review_is_exist.review = form.data['review']
            review_is_exist.stars = form.data['stars']
            db.session.commit()
            return review_is_exist.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# ============= Delete a review ==================
@review_routes.route('/<int:review_id>', methods=["DELETE"])
@login_required
def delete_review(review_id):
    review_is_exist = Review.query.get(review_id)
    if not review_is_exist:
        return {
            "message": "Review couldn't be found.",
            "status_code": 404
        }, 404
    else:
        db.session.delete(review_is_exist)
        db.session.commit()
        return {
            "message": "Successfully deleted",
            "status_code": 200
        }, 200
