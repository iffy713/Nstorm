from .db import db, environment, SCHEMA, add_prefix_for_prod

# user_addresses = db.Table(
#     "user_addresses",
#     db.Model.metadata,
#     db.Column("user_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), primary_key=True),
#     db.Column("address_id", db.Integer, db.ForeignKey(add_prefix_for_prod("addresses.id")), primary_key=True)
# )

# if environment == "production":
#     user_addresses.schema = SCHEMA

class UserAddress(db.Model):
    __tablename__ = "user_addresses"

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    address_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("addresses.id")))
    is_primary = db.Column(db.Boolean, nullable=True, default=False)

    user = db.relationship("User", back_populates="user_addresses")
    address = db.relationship("Address", back_populates="user_addresses")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "address_id": self.address_id,
            "is_primary": self.is_primary
        }

    def to_dict_with_user_and_address(self):
        return {
            "id": self.id,
            "User": {

            }
        }
