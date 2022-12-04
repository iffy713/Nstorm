from flask import Blueprint, jsonify, redirect
from flask_login import login_required, current_user
from app.models import db, CartItem

cart_routes = Blueprint('cart', __name__)


# ========== Get all cart items of the current user =========
@cart_routes.route('/')
@login_required
def cart():
    cart_items = []
    data = CartItem.query.filter(CartItem.user_id == current_user.id).all()

    for item in data:
        cart_items.append(item.to_dict_user_page())
    output = { "Cart_items": cart_items }
    return jsonify(output)



# ============ Remove product from cart =============
@cart_routes.route('/<int:cart_id>', methods=['DELETE'])
@login_required
def remove_product_from_cart(cart_id):
    item_is_exist = CartItem.query.get(cart_id)
    cart_items = CartItem.query.filter(CartItem.user_id==current_user.id)

    if not item_is_exist:
        return {
            "message": "No such item in cart.",
            "statusCode": 404
        }, 404
    else:
        db.session.delete(item_is_exist)
        db.session.commit()
        return "deleted successfully"
