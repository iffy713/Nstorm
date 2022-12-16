from flask_wtf import FlaskForm
from wtforms import BooleanField
from wtforms.validators import DataRequired, ValidationError
from app.models import db, UserAddress

class UniqueTrueValidator:
    def __init__(self, message=None):
        if not message:
            message = 'There can be only one true value'
        self.message = message

    def __call__(self, form, field):
        if field.data and UserAddress.query.filter_by(is_primary=True).count() > 0:
            raise ValidationError(self.message)

class UserAddressForm(FlaskForm):
    is_primary = BooleanField('is_primary', validators=[DataRequired(), UniqueTrueValidator()])
