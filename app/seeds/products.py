from app.models import db, Product, environment, SCHEMA


def seed_products():
    product1 = Product(
        name="Design Store Self Watering Pot",
        category="home_decor",
        price=40.00,
        brand="MOMA",
        brand_story="MOMA",
        about="Soggy succulents are a thing of the past thanks to an innovative pot-and-reservoir set that ensures you won't over- or under-water your precious plants. Simply fill the hand-blown glass reservoir with water, set the terracotta planter inside and your plants will do the rest, taking in only the water they need.",
    )

    product2 = Product(
        name="Flower Vase Air Dry Clay Pottery Kit",
        category="home_decor",
        price=65.00,
        brand="POTTERY WITH A PURPOSE",
        brand_story="POTTERY WITH A PURPOSE",
        about="This beginner–friendly kit includes everything you need to design, sculpt and decorate a clay vase to display a bouquet of dried flowers—no kiln needed.",
    )

    product3 = Product(
        name="Merry & Bright Cut-Out Banner Garland Kit",
        category="home_decor",
        price=15.95,
        brand="COTTON CLARA",
        brand_story="COTTON CLARA",
        about="Simple, satisfying and mess-free, this easy-make garland kit contains everything you need to build some fun Christmas memories with the crafters in your crew.",
    )

    product4 = Product(
        name="Closed Helix Brass Key Ring",
        category="home_decor",
        price=30.00,
        brand="CRAIGHILL",
        brand_story="CRAIGHILL",
        about="Minimalist design refines this industrial brass key ring featuring a simple closed helix with a threaded end cap that makes it easy to add and remove keys."
    )

    product5 = Product(
        name="Verso Handled Vase",
        category="home_decor",
        price=139.00,
        brand="FERM LIVING",
        brand_story="FERM LIVING",
        about = "Made with an undulating, feminine form and a pair of artfully curved handles, this glazed stoneware vase recalls classic shapes from traditional pottery."
    )

    product6 = Product(
        name="The Concentrate Serum",
        category="skin_care",
        price=220.00,
        brand="LA MER",
        brand_story="La Mer creates luxury, high-performance skin care and makeup by harnessing the power of the sea. In the 1960s, aerospace physicist Dr. Max Huber set out to help heal the appearance of scars he suffered in a lab accident. Pioneering the use of sea kelp and bio-fermentation in skin care, he created Miracle Broth™—the elixir that powers the legendary Crème de la Mer.",
        about = "What it is: A potent barrier serum with a concentrated form of cell-renewing Miracle Broth™ for skin that is stronger, more stable and visibly soothed."
    )


    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)
    db.session.add(product5)
    db.session.add(product6)
    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()
