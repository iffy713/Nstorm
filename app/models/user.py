from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .user_address import user_addresses


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    first_name = db.Column(db.String(40), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    cart_items = db.relationship("CartItem", back_populates="user")
    # addresses = db.relationship("Address", secondary=user_addresses, back_populates="users")
    user_addresses = db.relationship("UserAddress", back_populates="user")
    orders = db.relationship("Order", back_populates="user")
    reviews =db.relationship("Review", back_populates="user")


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'first_name' : self.first_name,
            'last_name': self.last_name,
            'email': self.email
        }

    def to_dict_everything(self):
        return {
            'id': self.id,
            'username': self.username,
            'first_name' : self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'Cart_items': [item.to_dict() for item in self.items],
            # 'Addresses': [address.to_dict() for address in self.addresses]
        }
