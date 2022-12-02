from app.models import db, Address, environment, SCHEMA

def seed_addresses():
    demo = Address(
        address_line1="88581 Konopelski Knolls",
        address_line2="",
        unit_number=764,
        city="South Mollyborough",
        state="LA",
        zip_code=55321
    )

    marnie = Address(
        address_line1="523 Caesar Lake",
        address_line2="",
        unit_number=191,
        city="Lowechester",
        state="MA",
        zip_code=97279,
    )

    bobbie = Address(
        address_line1="533 Caesar Lake",
        address_line2="",
        unit_number=190,
        city="Lowechester",
        state="MA",
        zip_code=97279,
    )


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()


def undo_addresses():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.addreses RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM addresses")

    db.session.commit()
