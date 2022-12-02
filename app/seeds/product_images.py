from app.models import db, ProductImage, environment, SCHEMA

def seed_product_images():
    image1 = ProductImage(
        product_id=1,
        url="https://n.nordstrommedia.com/id/sr3/a4cfb0ea-eda9-450d-8e0a-c52dd61a7257.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    image2 = ProductImage(
        product_id=1,
        url="https://n.nordstrommedia.com/id/sr3/90454dbc-102a-4a35-8f27-a532019cd3ca.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    image3 = ProductImage(
        product_id=1,
        url="https://n.nordstrommedia.com/id/sr3/d3eea653-b67b-4246-8ae0-63c3d25f5354.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    image4 = ProductImage(
        product_id=2,
        url="https://n.nordstrommedia.com/id/sr3/ce9a8161-7e52-4002-90e6-bf2e2035f155.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    image5 = ProductImage(
        product_id=2,
        url="https://n.nordstrommedia.com/id/sr3/6cff8353-7f41-4b1a-bc00-c3c3867b292b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    image6 = ProductImage(
        product_id=2,
        url="https://n.nordstrommedia.com/id/sr3/198cdfe3-e124-4c7d-b10f-a1330c68a42e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )



    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)
    db.session.commit()

def undo_product_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.product_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM product_images")
