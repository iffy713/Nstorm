from flask_wtf import FlaskForm
from wtforms import URLField
from wtforms.validators import DataRequired


class ImageForm(FlaskForm):
    url = URLField("image_url", validators=[DataRequired()])
