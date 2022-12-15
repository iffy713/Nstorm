from flask_wtf import FlaskForm
from wtforms import Textarea, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange

class ReviewForm(FlaskForm):
    review = Textarea("review", validators=[DataRequired(), Length(max=2000, message="Review has to shorter than 2000 characters.")])
    stars = IntegerField("stars", validators=[DataRequired(), NumberRange(min=1, max=5, message="Stars has to between 1 and 5.")])
    
