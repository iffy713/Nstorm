from app.models import db, Order, environment, SCHEMA

def seed_orders():
    # order1 = Order(
    #     user_id=1,
    #     address_id=1,
    # )

    order2 = Order(
        user_id=1,
        address_id=2
    )

    order3 = Order(
        user_id=2,
        address_id=2
    )

    # db.session.add(order1)
    db.session.add(order2)
    db.session.add(order3)


def undo_oders():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.orders RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM orders")

    db.session.commit()
