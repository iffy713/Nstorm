from app.models import db, Review, environment, SCHEMA

def seed_reviews():
    review1 = Review(
        user_id=1,
        product_id=1,
        review="I love how soft and comfortable the pajamas are. They have lasted through multiple washes and the color has not faded. Only negative is that the buttons do not stay closed and become undone all of the time. If that issue was fixed, I would order more of these for sure.",
        stars = 5
    )

    review2 = Review(
        user_id=2,
        product_id=1,
        review="These are still nice pajamas but the fabric is different than the original moonlight, also they run smaller than original pjs",
        stars=4
    )

    review3 = Review(
        user_id=1,
        product_id=2,
        review="They fit smaller and shrink easier than the others. Bought a couple of pairs on sale, but these are not as good and won’t be purchasing more.",
        stars=4
    )

    review4 = Review(
        user_id=2,
        product_id=2,
        review="I love how soft and comfortable the pajamas are. They have lasted through multiple washes and the color has not faded. Only negative is that the buttons do not stay closed and become undone all of the time. If that issue was fixed, I would order more of these for sure.",
        stars=4
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
