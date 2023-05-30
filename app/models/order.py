from .db import db, environment, SCHEMA, add_prefix_for_prod

class Order(db.Model):
    __tablename__ = 'orders'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    address_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("addresses.id")))
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=db.func.now())
    is_canceled = db.Column(db.Boolean, nullable=False, default=False)

    user = db.relationship("User", back_populates="orders")
    address = db.relationship("Address", back_populates="orders")
    order_products = db.relationship("OrderProduct", back_populates="order", cascade="all, delete")


    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "address_id": self.address_id,
            "created_at": self.created_at,
            "is_canceled": self.is_canceled
        }

    def to_dict_user_page(self):
        print("0000000000000000", self.address)
        return {
            "id": self.id,
            "created_at": self.created_at,
            "is_canceled": self.is_canceled,
            "Address": {
                "street": self.address.street,
                "city": self.address.city,
                "state": self.address.state,
                "zip_code": self.address.zip_code,
            },
            "Products": [product.to_dict_with_product() for product in self.order_products]
        }

    def to_dict_user_and_address(self):
        return {
            "id": self.id,
            "created_at": self.created_at,
            "is_canceled": self.is_canceled,
            "User": {
                "username": self.user.username,
                "first_name": self.user.first_name,
                "last_name": self.user.last_name,
                "email": self.user.email
            },
            "Address": {
                "street": self.address.street,
                "city": self.address.city,
                "state": self.address.state,
                "zip_code": self.address.zip_code,
            }
        }
