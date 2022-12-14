from .db import db, environment, SCHEMA, add_prefix_for_prod

class OrderProduct():
    __tablename__ = "order_products"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("orders.id")))
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")))
    is_canceled = db.Column(db.Boolean, nullable=False, default=False)

    order = db.relationship("Order", back_populates="order_products")
    product = db.relationship("Product", back_populates="order_products")

    def to_dict(self):
        return {
            "id": self.id,
            "order_id": self.order_id,
            "product_id": self.product_id,
            "is_canceled": self.is_canceled
        }

    def to_dict_with_product(self):
        return {
            "id": self.id,
            "is_canceled": self.is_canceled,
            "Product": {
                "id": self.product.id,
                "name": self.product.name,
                "category": self.product.category,
                "price": self.product.price,
                "brand": self.product.brand,
                "brand_story": self.product.brand_story,
                "about": self.product.about
            }
        }
