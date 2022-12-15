from .db import db, environment, SCHEMA, add_prefix_for_prod

class ReviewImage(db.Model):
    __tablename__ = "review_images"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    review_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("reviews.id")))
    url = db.Column(db.String(2000), nullable=False)

    review = db.relationship("Review", back_populates="review_images")

    def to_dict(self):
        return {
            "id": self.id,
            "review_id": self.review_id,
            "url": self.url
        }

    def to_dict_review_page(self):
        return {
            "id": self.id,
            "url": self.url
        }

    def to_dict_with_review(self):
        return {
            "id": self.id,
            "url": self.url,
            "Review": {
                "id": self.review.id,
                "product_id": self.review.product_id,
                "review": self.review.review,
                "stars": self.review.stars,
                "created_at": self.review.created_at
            }
        }
