from .db import db, environment, SCHEMA, add_prefix_for_prod

class Category(db.Model):
    __tablename__ = "categories"

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(1000), nullable=False)
    parent_category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=True)

    subcategories = db.relationship('Category')
    products = db.relationship("Product", back_populates="category")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "parent_category_id": self.parent_category_id
        }
