from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Address
from app.forms import AddressForm

address_routes = Blueprint('addresses', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# ========== Get all addresses ===========
@address_routes.route('')
def get_all_addresses():
    output = []
    addresses = Address.query.all()
    for address in addresses:
        output.append(address.to_dict())
    return jsonify({"Addresses":output})

# ============ Get address by id =============
@address_routes.route('/<int:address_id>')
def get_address_by_id(address_id):
    address = Address.query.get(address_id)
    if not address:
        return {
            "message": "Address couldn't found.",
            "status_code": 404
        }, 404
    else:
        return jsonify(address.to_dict_with_users())

# =========== Get all addresses of current user ===========
@address_routes.route('/current')
@login_required
def get_current_user_addresses():
    addresses = current_user.addresses
    output = []
    for address in addresses:
        output.append(address.to_dict())
    return jsonify({"Addresses":output})

# =========== Create a new address ===========
@address_routes.route('/', methods=['POST'])
@login_required
def create_new_address():
    form = AddressForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_address = Address(
            address_line1 = form.data['address_line1'],
            address_line2 = form.data['address_line2'],
            unit_number = form.data['unit_number'],
            city = form.data['city'],
            state = form.data['state'],
            zip_code = form.data['zip_code']
        )
        current_user.addresses.append(new_address)
        db.session.commit()
        return new_address.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# ============ Update an address ================
@address_routes.route('/<int:address_id>', methods=['PUT'])
@login_required
def user_update_address(address_id):
    address = Address.query.get(address_id)
    if not address:
        return {
            "message": "Address couldn't found.",
            "status_code": 404
        }, 404
    else:
        form = AddressForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        address.address_line1 = form.data['address_line1']
        address.address_line2 = form.data['address_line2']
        address.unit_number = form.data['unit_number']
        address.city = form.data['city']
        address.state = form.data['state']
        address.zip_code = form.data['zip_code']

        db.session.commit()
        return jsonify(address.to_dict())

# =========== Delete an address ==============
@address_routes.route('/<int:address_id>', methods=['DELETE'])
@login_required
def delete_address(address_id):
    address = Address.query.get(address_id)
    if not address:
        return {
            "message": "Address couldn't be found.",
            "statusCode": 404
        }, 404
    else:
        db.session.delete(address)
        db.session.commit()
        return {
            "message": "Address was deleted successrully",
            "statusCode": 200
        }, 200
