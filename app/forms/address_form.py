from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, Regexp, ValidationError
from app.models import Address

class AddressForm(FlaskForm):
    street = StringField("street", validators=[DataRequired()])
    city = StringField("city", validators=[DataRequired()])
    state = StringField("state", validators=[DataRequired()])
    zip_code = StringField('zip', validators=[DataRequired(), Regexp("^[0-9]{5}(?:-[0-9]{4})?$", message="Please enter a valid zip code.")])
    is_primary = BooleanField('is_primary')

    def validate_state(form, field):
        states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA",
          "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
          "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
          "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
          "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
        if not field.data in states:
            raise ValidationError("Please enter a valid state in US.")
