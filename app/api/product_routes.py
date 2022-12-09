from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Product, CartItem

product_routes = Blueprint('products', __name__)

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
    item_is_exist = CartItem.query.filter(CartItem.product_id==id).filter(CartItem.user_id == current_user.id).all()
    if item_is_exist:
        return {
            "message":"Item already in cart.",
            "statusCode": 403
        }, 403
    else:
        item = CartItem(
            user_id = current_user.id,
            product_id = id,
            quantity=data['quantity']
        )
        db.session.add(item)
        db.session.commit()
        return item.to_dict()
