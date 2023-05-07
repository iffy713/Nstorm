from app.models import db, UserAddress, environment, SCHEMA

def seed_user_addresses():
    address1 = UserAddress(
        user_id=1,
        address_id=1,
        is_primary = False
    )
    address2 = UserAddress(
        user_id=1,
        address_id=2,
        is_primary = False
    )
    address3 = UserAddress(
        user_id=2,
        address_id=1,
        is_primary = False
    )
    address4 = UserAddress(
        user_id=3,
        address_id=2,
        is_primary = False
    )

    db.session.add(address1)
    db.session.add(address2)
    db.session.add(address3)
    db.session.add(address4)
    db.session.commit()


def undo_user_addresses():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.user_addresses RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM user_addresses")

    db.session.commit()
