from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash


class Product(db.Model):
    __tablename__ = "products"

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(2000), nullable=False)
    category = db.Column(db.String(40), nullable=False)
    price = db.Column(db.Float, nullable=False)
    brand = db.Column(db.String(40), nullable=False)
    brand_story = db.Column(db.String(2000), nullable=False)
    about = db.Column(db.String(2000), nullable=False)

    cart_items = db.relationship("CartItem", back_populates="product")
    images = db.relationship("ProductImage", back_populates="product")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category,
            "price": self.price,
            "brand": self.brand,
            "brand_story": self.brand_story,
            "about": self.about,
            "preview_image": self.images[0].url
        }

    def to_dict_detail(self):
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category,
            "price": self.price,
            "brand": self.brand,
            "brand_story": self.brand_story,
            "about": self.about,
            "ProductImages": [image.to_dict_with_product() for image in self.images]
        }
