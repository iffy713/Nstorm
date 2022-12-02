from flask import Blueprint, jsonify
from app.models import Product

product_routes = Blueprint('products', __name__)


@product_routes.route('/')
def get_all_products():
    all_products = []
    data = Product.query.all()
    for product in data:
        all_products.append(product.to_dict())
    output = {"Products": all_products}
    return jsonify(output)

@product_routes.route('/<int:id>')
def get_single_product(id):
    product = Product.query.get(id)
    if not product:
        return {
            "message": "Product couldn't be found.",
            "statusCode": 404
        }, 404
    return product.to_dict_detail()
