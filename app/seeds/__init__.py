from flask.cli import AppGroup
from .users import seed_users, undo_users
from .address import seed_addresses, undo_addresses
from .user_addresses import seed_user_addresses, undo_user_addresses
from .products import seed_products, undo_products
from .product_images import seed_product_images, undo_product_images
from .cart_items import seed_cart_items, undo_cart_items
from .orders import seed_orders, undo_oders
from .order_products import seed_order_products, undo_order_products
from .reviews import seed_reviews, undo_reviews
from .review_images import seed_review_images, undo_review_images

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_order_products()
        undo_cart_items()
        undo_user_addresses()
        undo_addresses()
        undo_product_images()
        undo_review_images()
        undo_reviews()
        undo_products()
        undo_oders()
        undo_users()
    seed_users()
    seed_orders()
    seed_products()
    seed_reviews()
    seed_review_images()
    seed_product_images()
    seed_addresses()
    seed_user_addresses()
    seed_cart_items()
    seed_order_products()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_order_products()
    undo_cart_items()
    undo_user_addresses()
    undo_addresses()
    undo_product_images()
    undo_review_images()
    undo_reviews()
    undo_products()
    undo_oders()
    undo_users()
    # Add other undo functions here
