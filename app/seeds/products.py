from app.models import db, Product, environment, SCHEMA


def seed_products():
    product1 = Product(
        name="Long Sleeve Cotton Flannel Pajamas & Headband Set",
        category="women",
        price=49.99,
        brand="PJ Salvage",
        brand_story="PJ Salvage designs women's pajamas, chemises, loungewear and more with a focus on both fashion and comfort. The brand is known for using luxurious fabrics and chic, distinct prints that are stylish enough to wear outside the bedroom. With sizes ranging from XS to 3X, PJ Salvage prides itself on creating high-quality sleepwear for every woman.",
        about="Cozy up in these ultrasoft flannel PJs featuring a matching headband for your luxurious nighttime routine.",
    )

    product2 = Product(
        name="Long Sleeve Belted Cotton & Silk Shirtdress",
        category="women",
        price=139.99,
        brand="PROENZA SCHOULER",
        brand_story="Designers Jack McCollough and Lazaro Hernandez met as students at Parsons School of Design in New York City. They founded Proenza Schouler in 2002, bestowing their new venture with their mothers' maiden names. The multi-award-winning brand fuses craftsmanship and attention to detail with a sense of refined ease, with the designers drawing inspiration from contemporary art and youth culture.",
        about="A sweeping sash wraps the waist of this silk-enriched cotton shirtdress that can be undone at the sleeves to create a dramatic cape-like effect.",
    )


    db.session.add(product1)
    db.session.add(product2)
    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()
