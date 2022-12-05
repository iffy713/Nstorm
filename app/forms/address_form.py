from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length, Email, ValidationError
from app.models import Address

class AddressForm(FlaskForm):
    address_line1 = StringField("Address line 1", validators=[DataRequired()])
    address_line2 = StringField("Address line 2")
    unit_number = IntegerField("Unit number")
    city = StringField("city", validators=[DataRequired()])
    state = StringField("state", validators=[DataRequired()])
    zip_code = StringField('zip', validators=[DataRequired()])
