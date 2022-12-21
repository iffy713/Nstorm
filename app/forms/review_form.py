from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange

class ReviewForm(FlaskForm):
    headline = TextAreaField("headline",validators=[DataRequired(), Length(min=10, max=50, message="Headlind has to between 10 to 50 characters." )] )
    review = TextAreaField("review", validators=[DataRequired(), Length(max=5000, message="Review has to shorter than 2000 characters.")])
    stars = IntegerField("stars", validators=[DataRequired(), NumberRange(min=1, max=5, message="Stars has to between 1 and 5.")])
