from app.models import db, Address, environment, SCHEMA

def seed_addresses():
    demo = Address(
        street="88581 Konopelski Knolls",
        city="South Mollyborough",
        state="LA",
        zip_code=55321,
        is_primary=True
    )

    marnie = Address(
        street="523 Caesar Lake",
        city="Lowechester",
        state="MA",
        zip_code=97279,
        is_primary=True
    )

    bobbie = Address(
        street="533 Caesar Lake",
        city="Lowechester",
        state="MA",
        zip_code=97279,
        is_primary=True
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
