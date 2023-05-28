from app.models import db, ReviewImage, environment, SCHEMA

def seed_review_images():
    # image1 = ReviewImage(
    #     review_id = 1,
    #     url="https://n.nordstrommedia.com/id/sr3/bb08eea1-f884-487a-b077-16838db72eee.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=489&h=750"
    # )

    image2 = ReviewImage(
        review_id=1,
        url="https://n.nordstrommedia.com/id/sr3/5d6c882e-ed41-480d-8743-bcafcbb1a3af.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
    )

    image3 = ReviewImage(
        review_id=2,
        url="https://n.nordstrommedia.com/id/sr3/5d6c882e-ed41-480d-8743-bcafcbb1a3af.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
    )

    image4 = ReviewImage(
        review_id=2,
        url="https://n.nordstrommedia.com/id/sr3/5d6c882e-ed41-480d-8743-bcafcbb1a3af.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
    )

    # db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.commit()

def undo_review_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.review_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM review_images")
