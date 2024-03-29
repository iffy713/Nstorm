from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash


class Product(db.Model):
    __tablename__ = "products"

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(2000), nullable=False)
    # category = db.Column(db.String(40), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("categories.id")))
    price = db.Column(db.Float, nullable=False)
    brand = db.Column(db.String(40), nullable=False)
    brand_story = db.Column(db.String(2000), nullable=False)
    about = db.Column(db.String(2000), nullable=False)

    cart_items = db.relationship("CartItem", back_populates="product")
    order_products = db.relationship("OrderProduct", back_populates="product")
    images = db.relationship("ProductImage", back_populates="product")
    reviews =db.relationship("Review", back_populates="product")
    category = db.relationship("Category", back_populates="products")

    def get_avg_rating(self):
        if len(self.reviews) == 0:
            return 0
        else:
            avg = sum(review.stars for review in self.reviews)/ len(self.reviews)
            return round(avg,1)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "Category": {
                "category_id": self.category_id,
                "category_name": self.category.name,
            },
            "price": self.price,
            "brand": self.brand,
            "brand_story": self.brand_story,
            "about": self.about,
            "preview_image": self.images[0].url,
            "average_rating": self.get_avg_rating(),
            "num_of_review": len(self.reviews)
        }

    def to_dict_detail(self):
        return {
            "id": self.id,
            "name": self.name,
            "Category": {
                "category_id": self.category_id,
                "category_name": self.category.name,
            },
            "price": self.price,
            "brand": self.brand,
            "brand_story": self.brand_story,
            "about": self.about,
            "ProductImages": [image.to_dict_with_product() for image in self.images],
            "Avg_rating": self.get_avg_rating(),
            "Reviews": [review.to_dict_product_page() for review in self.reviews]
        }
