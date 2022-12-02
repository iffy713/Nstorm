from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user_address import user_addresses


class Address(db.Model):
    __tablename__ = "addresses"

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    address_line1 = db.Column(db.String, nullable=False)
    address_line2 = db.Column(db.String, nullable=True)
    unit_number = db.Column(db.Integer, nullable=True)
    city = db.Column(db.String(30), nullable=False)
    state = db.Column(db.String(30), nullable=False)
    zip_code = db.Column(db.Integer, nullable=False)

    users = db.relationship("User", secondary=user_addresses, back_populates="addresses")

    def to_dict(self):
        return {
            "id": self.id,
            "address_line1": self.address_line1,
            "address_line2": self.address_line2,
            "unit_number": self.unit_number,
            "city": self.city,
            "state": self.state,
            "zip_code": self.zip_code
        }

    def to_dict_with_users(self):
        return {
            "id": self.id,
            "address_line1": self.address_line1,
            "address_line2": self.address_line2,
            "unit_number": self.unit_number,
            "city": self.city,
            "state": self.state,
            "zip_code": self.zip_code,
            "Users": [user.to_dict() for user in self.users]
        }
