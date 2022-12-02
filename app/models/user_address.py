from .db import db, environment, SCHEMA, add_prefix_for_prod

user_addresses = db.Table(
    "user_addresses",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), primary_key=True),
    db.Column("address_id", db.Integer, db.ForeignKey(add_prefix_for_prod("addresses.id")), primary_key=True)
)

if environment == "production":
    user_addresses.schema = SCHEMA
