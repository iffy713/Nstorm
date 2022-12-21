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
@order_routes.route('/new', methods=['POST'])
@login_required
def place_order():
# ------- Step1: create new order in Order table --------
    data = request.get_json()

    new_order = Order(
        user_id=current_user.id,
        address_id=data['address_id']
    )
    db.session.add(new_order)
    db.session.commit()

# ------- Step2: create new column in OrderProduct table -------
    items = []
    cart_data = CartItem.query.filter(CartItem.user_id == current_user.id).all()
    if not cart_data:
        return {
            "error": "Nothing in the shopping cart!",
            "status_code": 404
        }, 404

    for item in cart_data:
        # items.append(item.to_dict())
        products_orders = OrderProduct(
            order_id=new_order.id,
            product_id=item.product_id,
            quantity=item.quantity
        )
        print("from cart into order!!")
        items.append(products_orders.to_dict())
        db.session.add(products_orders)

# ------- Step3: delete products record in Cart table
        db.session.delete(item)
        print("item removed from cart!!")
        db.session.commit()

    # print(items)

    return {"Order": new_order.to_dict_user_page()}


# ========= Update an order (cancel whole order) =============
@order_routes.route('/<int:order_id>', methods=['PUT'])
@login_required
def cancel_order(order_id):

    order = Order.query.get(order_id)
    if not order:
        return {
            "message": "Order couldn't be found.",
            "statusCode": 404
        }, 404
    elif order.is_canceled == True:
        return {
            "message": "Order has been canceled.",
            "statusCode": 403
        }, 403
    else:
        order.is_canceled = True
        db.session.commit()

    return order.to_dict_user_page()


# ============ Delete an order =================
@order_routes.route('/<int:order_id>', methods=['DELETE'])
@login_required
def delete_order(order_id):
    order = Order.query.get(order_id)
    if not order:
        return {
            "message": "Order couldn't be found.",
            "statusCode": 404
        }, 404
    else:
        db.session.delete(order)
        db.session.commit()
        return {
            "message": "Order was deleted successfully",
            "statusCode": 200
        }, 200
