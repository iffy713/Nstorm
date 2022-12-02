from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import CartItem

cart_routes = Blueprint('cart', __name__)

@cart_routes.route('/')
@login_required
def cart():
    cart_items = []
    data = CartItem.query.filter(CartItem.user_id == current_user.id).all()

    for item in data:
        cart_items.append(item.to_dict())
    output = { "Cart_items": cart_items }
    return jsonify(output)
