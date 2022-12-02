from app.models import db, user_addresses, environment, SCHEMA

def seed_user_addresses():
    address1 = user_addresses.insert().values(
        user_id=1, address_id=1
    )
    address2 = user_addresses.insert().values(
        user_id=1, address_id=2
    )
    address3 = user_addresses.insert().values(
        user_id=2, address_id=1
    )
    address4 = user_addresses.insert().values(
        user_id=3, address_id=2
    )

    db.session.execute(address1)
    db.session.execute(address2)
    db.session.execute(address3)
    db.session.execute(address4)
    db.session.commit()


def undo_user_addresses():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.user_addresses RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM user_addresses")

    db.session.commit()
