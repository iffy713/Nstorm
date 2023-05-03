from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from sqlalchemy import func
from app.models import db, Product, CartItem, Review
from app.forms import ReviewForm

product_routes = Blueprint('products', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

#  ========== Get all products =============
@product_routes.route('')
def get_all_products():
    all_products = []
    data = Product.query.all()
    for product in data:
        all_products.append(product.to_dict())
    output = {"Products": all_products}
    return jsonify(output)


#  ========== Get single product ============
@product_routes.route('/<int:id>')
def get_single_product(id):
    product = Product.query.get(id)
    if not product:
        return {
            "message": "Product couldn't be found.",
            "statusCode": 404
        }, 404
    return product.to_dict_detail()


# ========== Add product into cart ==========
@product_routes.route('/<int:id>/cart', methods=['POST'])
@login_required
def add_product_to_cart(id):
    data = request.get_json()
    item_is_exist = CartItem.query.filter(CartItem.product_id==id).filter(CartItem.user_id == current_user.id).first()
    print("item is exist here", item_is_exist)
    if not item_is_exist:
        item = CartItem(
            user_id = current_user.id,
            product_id = id,
            quantity = data['quantity']
        )
        db.session.add(item)
        db.session.commit()
        return item.to_dict()
    else:
        item_is_exist.quantity += int(data['quantity'])
        db.session.commit()
        return item_is_exist.to_dict()

# =============== Get all review by a product'id ===============
@product_routes.route('/<int:id>/reviews')
def get_reviews_of_product(id):
    product = Product.query.get(id)
    if not product:
        return {
            "message": "Product couldn't be found.",
            "status_code": 404
        }, 404
    reviews = product.reviews
    print("reviews________", product, reviews ,"========================")
    output = []
    for review in reviews:
        output.append(review.to_dict_product_page())

    return {"Reviews": output}

# ============= Create a review for product based on the product's id =============
@product_routes.route('/<int:id>/reviews', methods=['POST'])
@login_required
def create_new_review(id):

    review_is_exit = Review.query.filter(Review.user_id == current_user.id).filter(Review.product_id == id).first()
    if review_is_exit:
        return {
            "errors": "User already has a review for this product",
            "status_code": 403
        }, 403

    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            user_id=current_user.id,
            product_id=id,
            headline=form.data['headline'],
            review=form.data['review'],
            stars=form.data['stars'],
        )
        db.session.add(review)
        db.session.commit()

        return review.to_dict_user_page()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401






# search feature: by product name or product brand
@product_routes.route('/search')
@product_routes.route('/search/<keyword>')
def search_by_keyword(keyword=None):
    if keyword is None:
        output = { 'message':'Please provide a keyword to search.' }
    else:
        lower_word = keyword.lower()
        filted_products = Product.query.filter((func.lower(Product.name).like(f"%{lower_word}%")) | (func.lower(Product.brand).like(f"%{lower_word}%"))).all()
        output = {'filted_products': [product.to_dict() for product in filted_products]}

    return jsonify(output)


# category feature: filter the products by their category
# @product_routes.route('/category/<keyword>')
# def filter_by_category(keyword=None):
#     # print(keyword)
#     if keyword is None:
#         output = { 'message':'Please provide a category name' }

#     return "testing"
#     # return output
