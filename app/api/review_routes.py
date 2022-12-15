from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Review


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

