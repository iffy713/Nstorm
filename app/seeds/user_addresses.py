# from app.models import db, user_addresses, environment, SCHEMA

# def seed_user_addresses():
#     address1 = user_addresses.insert().values(
#         user_id=1, address_id=1
#     )
#     address2 = user_addresses.insert().values(
#         user_id=1, address_id=2
#     )
#     address3 = user_addresses.insert().values(
#         user_id=2, address_id=1
#     )
#     address4 = user_addresses.insert().values(
#         user_id=3, address_id=2
#     )

#     db.session.execute(address1)
#     db.session.execute(address2)
#     db.session.execute(address3)
#     db.session.execute(address4)
#     db.session.commit()
from app.models import db, UserAddress, environment, SCHEMA

def seed_user_addresses():
    user_address1 = UserAddress(
        user_id = 1,
        address_id =  1,
        is_primary = True
    )
    user_address2 = UserAddress(
        user_id = 1,
        address_id = 2,
        is_primary = False
    )
    user_address3 = UserAddress(
        user_id = 2,
        address_id = 1,
        is_primary = False
    )
    user_address4 = UserAddress(
        user_id = 2,
        address_id = 2,
        is_primary = True
    )
    user_address5 = UserAddress(
        user_id=1,
        address_id = 3,
        is_primary = False
    )

    db.session.add(user_address1)
    db.session.add(user_address2)
    db.session.add(user_address3)
    db.session.add(user_address4)
    db.session.add(user_address5)
    db.session.commit()

def undo_user_addresses():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.user_addresses RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM user_addresses")

    db.session.commit()
