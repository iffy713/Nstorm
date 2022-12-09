from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user_address import user_addresses


class Address(db.Model):
    __tablename__ = "addresses"

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    street = db.Column(db.String(300), nullable=False)
    city = db.Column(db.String(30), nullable=False)
    state = db.Column(db.String(30), nullable=False)
    zip_code = db.Column(db.Integer, nullable=False)
    is_primary = db.Column(db.Boolean, nullable=False)

    users = db.relationship("User", secondary=user_addresses, back_populates="addresses")

    def to_dict(self):
        return {
            "id": self.id,
            "street": self.street,
            "city": self.city,
            "state": self.state,
            "zip_code": self.zip_code
        }

    def to_dict_with_users(self):
        return {
            "id": self.id,
            "street": self.street,
            "city": self.city,
            "state": self.state,
            "zip_code": self.zip_code,
            "Users": [user.to_dict() for user in self.users]
        }
