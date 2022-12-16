from .db import db, environment, SCHEMA, add_prefix_for_prod


class Address(db.Model):
    __tablename__ = "addresses"

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(40), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    street = db.Column(db.String(300), nullable=False)
    city = db.Column(db.String(30), nullable=False)
    state = db.Column(db.String(30), nullable=False)
    zip_code = db.Column(db.String(5), nullable=False)
    # is_primary = db.Column(db.Boolean, nullable=False)


    # users = db.relationship("User", secondary=user_addresses, back_populates="addresses")
    user_addresses = db.relationship("UserAddress", back_populates="address", cascade="all, delete")

    orders = db.relationship("Order", back_populates="address")


    def to_dict(self):
        return {
            "id": self.id,
            'first_name' : self.first_name,
            'last_name': self.last_name,
            "street": self.street,
            "city": self.city,
            "state": self.state,
            "zip_code": self.zip_code,
        }

    def to_dict_with_users(self):
        return {
            "id": self.id,
            'first_name' : self.first_name,
            'last_name': self.last_name,
            "street": self.street,
            "city": self.city,
            "state": self.state,
            "zip_code": self.zip_code,
        }
