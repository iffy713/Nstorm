from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, CartItem

cart_routes = Blueprint('cart', __name__)


# ========== Get all cart items of the current user =========
@cart_routes.route('')
@login_required
def get_cart_items():
    cart_items = []
    data = CartItem.query.filter(CartItem.user_id == current_user.id).all()

    for item in data:
        cart_items.append(item.to_dict_user_page())
    output = { "Cart_items": cart_items }
    return jsonify(output)

# ========== Update quantity of items in the cart ===============
@cart_routes.route('/<int:item_id>', methods=["PUT"])
@login_required
def update_product_quantity(item_id):
    data = request.get_json()
    item_is_exist = CartItem.query.get(item_id)
    if not item_is_exist:
        return {
            "message": "No such item in cart.",
            "statusCode": 404
        }, 404
    else:
        item_is_exist.quantity=data["quantity"]
        db.session.commit()
        return item_is_exist.to_dict()


# ============ Remove product from cart =============
@cart_routes.route('/<int:item_id>', methods=['DELETE'])
@login_required
def remove_product_from_cart(item_id):
    item_is_exist = CartItem.query.get(item_id)
    if not item_is_exist:
        return {
            "message": "No such item in cart.",
            "status_code": 404
        }, 404
    else:
        db.session.delete(item_is_exist)
        db.session.commit()
        return {
            "message": "Item successfully deleted",
            "statusCode": 200
        }, 200

# # ============ Place an order ==============
# @cart_routes.route('/checkout', methods=['POST'])
# @login_required
# def place_order():
