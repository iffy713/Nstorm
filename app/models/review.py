from .db import db, environment, SCHEMA, add_prefix_for_prod

class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")))
    headline = db.Column(db.String(1000), nullable=False)
    review = db.Column(db.String(5000), nullable=False)
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
            "headline": self.headline,
            "review": self.review,
            "stars": self.stars,
            "created_at": self.created_at
        }

    def to_dict_user_page(self):
        return {
            "id": self.id,
            "headline": self.headline,
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
                "preview_image": self.product.images[0].url
            },
            "Review_images": [image.to_dict_review_page() for image in self.review_images]
        }

    def to_dict_product_page(self):
        # print("!!!!!!!!!!!!!!!!!",self.review_images[0].to_dict_review_page())
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "headline": self.headline,
            "review": self.review,
            "stars": self.stars,
            "created_at": self.created_at,
            "Review_images": [image.to_dict_review_page() for image in self.review_images],
            "User": {
                'id': self.user.id,
                'username': self.user.username,
                'first_name' : self.user.first_name,
                'last_name': self.user.last_name,
                'email': self.user.email
            }
        }
