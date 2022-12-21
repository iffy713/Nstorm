from app.models import db, OrderProduct, environment, SCHEMA

def seed_order_products():
    order_product1 = OrderProduct(
        order_id=1,
        product_id=1,
        quantity=3,
    )

    order_product2 = OrderProduct(
        order_id=1,
        product_id=2,
        quantity=5,
    )

    order_product3 = OrderProduct(
        order_id=2,
        product_id=1,
        quantity=8
    )

    order_product4 = OrderProduct(
        order_id=2,
        product_id=2,
        quantity=1
    )

    db.session.add(order_product1)
    db.session.add(order_product2)
    db.session.add(order_product3)
    db.session.add(order_product4)
    db.session.commit()

def undo_order_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.order_products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM order_products")

    db.session.commit()
