"""create at new branch

Revision ID: a2278859de62
Revises:
Create Date: 2023-05-08 23:35:31.405356

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


# revision identifiers, used by Alembic.
revision = 'a2278859de62'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('first_name', sa.String(length=40), nullable=False),
    sa.Column('last_name', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")

    op.create_table('addresses',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('street', sa.String(length=300), nullable=False),
    sa.Column('city', sa.String(length=30), nullable=False),
    sa.Column('state', sa.String(length=30), nullable=False),
    sa.Column('zip_code', sa.String(length=5), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE addresses SET SCHEMA {SCHEMA};")

    op.create_table('products',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=2000), nullable=False),
    sa.Column('category_id', sa.Integer(), nullable=True),
    sa.Column('price', sa.Float(), nullable=False),
    sa.Column('brand', sa.String(length=40), nullable=False),
    sa.Column('brand_story', sa.String(length=2000), nullable=False),
    sa.Column('about', sa.String(length=2000), nullable=False),
    sa.ForeignKeyConstraint(['category_id'], ['categories.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE products SET SCHEMA {SCHEMA};")

    op.create_table('orders',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('address_id', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.Column('is_canceled', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['address_id'], ['addresses.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE orders SET SCHEMA {SCHEMA};")

    op.create_table('categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=1000), nullable=False),
    sa.Column('parent_category_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['parent_category_id'], ['categories.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE categories SET SCHEMA {SCHEMA};")


    op.create_table('user_addresses',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('address_id', sa.Integer(), nullable=True),
    sa.Column('is_primary', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['address_id'], ['addresses.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE user_addresses SET SCHEMA {SCHEMA};")

    op.create_table('cart_items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['product_id'], ['products.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE cart_items SET SCHEMA {SCHEMA};")

    op.create_table('order_products',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('order_id', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.Column('is_canceled', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['order_id'], ['orders.id'], ),
    sa.ForeignKeyConstraint(['product_id'], ['products.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE order_products SET SCHEMA {SCHEMA};")

    op.create_table('product_images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.Column('url', sa.String(length=200), nullable=False),
    sa.Column('preview', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['product_id'], ['products.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE product_images SET SCHEMA {SCHEMA};")

    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.Column('headline', sa.String(length=1000), nullable=False),
    sa.Column('review', sa.String(length=5000), nullable=False),
    sa.Column('stars', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.ForeignKeyConstraint(['product_id'], ['products.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE reviews SET SCHEMA {SCHEMA};")

    op.create_table('review_images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('review_id', sa.Integer(), nullable=True),
    sa.Column('url', sa.String(length=2000), nullable=False),
    sa.ForeignKeyConstraint(['review_id'], ['reviews.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE review_images SET SCHEMA {SCHEMA};")

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('review_images')
    op.drop_table('reviews')
    op.drop_table('product_images')
    op.drop_table('order_products')
    op.drop_table('cart_items')
    op.drop_table('user_addresses')
    op.drop_table('categories')
    op.drop_table('orders')
    op.drop_table('products')
    op.drop_table('addresses')
    op.drop_table('users')
    # ### end Alembic commands ###
