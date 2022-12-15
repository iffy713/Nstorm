from .db import db, environment, SCHEMA, add_prefix_for_prod

class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")))
    review = db.Column(db.String(2000), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, server_default=db.func.now())

    user = db.relationship("User", back_populates="reviews")
    product = db.relationship("Product", back_populates="reviews")
    review_images = db.relationship("ReviewImage", back_populates="review", cascade="all, delete")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "review": self.review,
            "stars": self.stars,
            "created_at": self.created_at
        }

    def to_dict_user_page(self):
        return {
            "id": self.id,
            "review": self.review,
            "stars": self.stars,
            "created_at": self.created_at,
            "Product": {
                "id": self.product.id,
                "name": self.product.name,
                "category": self.product.category,
                "price": self.product.price,
                "brand": self.product.brand,
                "brand_story": self.product.brand_story,
                "about": self.product.about,
            },
            "Review_images": [image.to_dict_review_page() for image in self.review_images]
        }

    def to_dict_product_page(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "review": self.review,
            "stars": self.stars,
            "Review_images": [image.to_dict_review_page() for image in self.review_images],
            "User": {
                'id': self.user.id,
                'username': self.user.username,
                'first_name' : self.user.first_name,
                'last_name': self.user.last_name,
                'email': self.user.email
            }
        }
