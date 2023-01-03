from app.models import db, ProductImage, environment, SCHEMA

def seed_product_images():
    p1_image1 = ProductImage(
        product_id=1,
        url="https://n.nordstrommedia.com/id/sr3/2c22ab48-7b92-4981-8c40-20c146ba354d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    p1_image2 = ProductImage(
        product_id=1,
        url="https://n.nordstrommedia.com/id/sr3/db8916a8-cf57-4c6c-bdf5-28afd7bdfe19.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p1_image3 = ProductImage(
        product_id=1,
        url="https://n.nordstrommedia.com/id/sr3/829b4966-3400-4308-8ef3-d1529e77ac5b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p1_image4 = ProductImage(
        product_id=1,
        url="https://n.nordstrommedia.com/id/sr3/feaae46b-df2b-41a6-8969-7f4e880cc440.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p2_image1 = ProductImage(
        product_id=2,
        url="https://n.nordstrommedia.com/id/sr3/e5ac47df-8b6f-4527-87cb-224a5c6c8618.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    p2_image2 = ProductImage(
        product_id=2,
        url="https://n.nordstrommedia.com/id/sr3/088d1695-dca7-47e8-b3ea-8f4a6a6ef842.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p2_image3= ProductImage(
        product_id=2,
        url="https://n.nordstrommedia.com/id/sr3/12d0b01d-01b7-4473-8609-94992ac913ae.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p2_image4 = ProductImage(
        product_id=2,
        url="https://n.nordstrommedia.com/id/sr3/387cbf9d-fda1-40ee-8794-d500daf9c241.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p3_image1 = ProductImage(
        product_id=3,
        url="https://n.nordstrommedia.com/id/sr3/5a4d01fd-72bd-441c-b957-7cc597f610e3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    p3_image2 = ProductImage(
        product_id=3,
        url="https://n.nordstrommedia.com/id/sr3/cd661a16-3e0e-4c9c-a739-b9f887ab7762.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p3_image3 = ProductImage(
        product_id=3,
        url="https://n.nordstrommedia.com/id/sr3/11ea29fb-09f8-463e-bc37-ffb1e3afe70b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p3_image4 = ProductImage(
        product_id=3,
        url="https://n.nordstrommedia.com/id/sr3/61999383-da54-424c-a78b-fc8d3c8b2e1e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p4_image1 = ProductImage(
        product_id=4,
        url="https://n.nordstrommedia.com/id/sr3/d4342e92-ec3b-4290-8921-d3f60e573c3f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    p4_image2 = ProductImage(
        product_id=4,
        url="https://n.nordstrommedia.com/id/sr3/e16948b9-ce6c-40eb-8400-f50fe8f25342.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p4_image3 = ProductImage(
        product_id=4,
        url="https://n.nordstrommedia.com/id/sr3/0bdbb910-0849-4d34-b207-6d6b8607a99b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p4_image4 = ProductImage(
        product_id=4,
        url="https://n.nordstrommedia.com/id/sr3/343f90e0-3301-42ff-95ba-d4a44cdd6d39.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p5_image1 = ProductImage(
        product_id=5,
        url="https://n.nordstrommedia.com/id/sr3/72e7ef84-5aa2-43df-854f-173fced55125.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    p5_image2 = ProductImage(
        product_id=5,
        url="https://n.nordstrommedia.com/id/sr3/d90d4a4c-a7ec-4f93-a0e0-fc7bf7468003.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p5_image3 = ProductImage(
        product_id=5,
        url="https://n.nordstrommedia.com/id/sr3/cfc0c4db-9246-4b5c-930c-007ef3aab5c2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p5_image4 = ProductImage(
        product_id=5,
        url="https://n.nordstrommedia.com/id/sr3/5e64d446-0b68-4db6-a45a-01b1faec730b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p6_image1 = ProductImage(
        product_id=6,
        url="https://n.nordstrommedia.com/id/sr3/6b2e1ecd-846e-4587-810a-2247f8ac209a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=True
    )

    p6_image2 = ProductImage(
        product_id=6,
        url="https://n.nordstrommedia.com/id/sr3/bd52f314-e3aa-46ae-beb1-46e71934d5f4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p6_image3 = ProductImage(
        product_id=6,
        url="https://n.nordstrommedia.com/id/sr3/d5f1ebb2-460f-4f64-88d4-5fa3b584fa32.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )

    p6_image4 = ProductImage(
        product_id=6,
        url="https://n.nordstrommedia.com/id/sr3/7e1e1d70-e9b9-49d6-b8cc-8a6d86f91efb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        preview=False
    )





    db.session.add(p1_image1)
    db.session.add(p1_image2)
    db.session.add(p1_image3)
    db.session.add(p1_image4)

    db.session.add(p2_image1)
    db.session.add(p2_image2)
    db.session.add(p2_image3)
    db.session.add(p2_image4)

    db.session.add(p3_image1)
    db.session.add(p3_image2)
    db.session.add(p3_image3)
    db.session.add(p3_image4)

    db.session.add(p4_image1)
    db.session.add(p4_image2)
    db.session.add(p4_image3)
    db.session.add(p4_image4)

    db.session.add(p5_image1)
    db.session.add(p5_image2)
    db.session.add(p5_image3)
    db.session.add(p5_image4)

    db.session.add(p6_image1)
    db.session.add(p6_image2)
    db.session.add(p6_image3)
    db.session.add(p6_image4)

    db.session.commit()

def undo_product_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.product_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM product_images")
