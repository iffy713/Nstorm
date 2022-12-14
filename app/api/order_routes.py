from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Order, OrderProduct, CartItem

order_routes = Blueprint('orders', __name__)

# ============  Get all orders =============
@order_routes.route('')
def get_all_orders():
    all_orders = []
    data = Order.query.all()
    for order in data:
        all_orders.append(order.to_dict_user_and_address())
    output = { 'Orders': all_orders }
    return jsonify(output)


# =========== Get all orders of current user ===========
@order_routes.route('/current')
@login_required
def get_current_user_orders():
    orders = current_user.orders
    output = []
    for order in orders:
        output.append(order.to_dict_user_page())
    return jsonify({"Orders": output})


# ============ Place an order ==============
@order_routes.route('/new')
@login_required
def place_order():
    items = []
    data = CartItem.query.filter(CartItem.user_id == current_user.id).all()
    for item in data:
        items.append(item.to_dict())
    print(items)

    return "testing"
