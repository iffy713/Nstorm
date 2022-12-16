from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Address, UserAddress
from app.forms import AddressForm, UserAddressForm

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
    addresses = current_user.user_addresses
    output = []
    for address in addresses:
        output.append(address.to_dict_user_page())
    return jsonify({"Addresses":output})

# =========== Create a new address ===========
@address_routes.route('', methods=['POST'])
@login_required
def create_new_address():
    form = AddressForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_address = Address(
            first_name = form.data['first_name'],
            last_name = form.data['last_name'],
            street = form.data['street'],
            city = form.data['city'],
            state = form.data['state'],
            zip_code = form.data['zip_code'],
        )
        db.session.add(new_address)
        db.session.commit()

        return new_address.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# =============== Set primary address ===================
@address_routes.route('/<int:address_id>', methods=['POST'])
@login_required
def set_primary_address(address_id):
    # data = request.get_json()
    # primary_address = UserAddress(
    #     user_id = current_user.id,
    #     address_id = address_id,
    #     is_primary = data['is_primary']
    # )
    # db.session.add(primary_address)
    # db.session.commit()
    # return primary_address.to_dict_user_page()
    form = UserAddressForm()
    if form.validate_on_submit():
        address = UserAddress(
            user_id = current_user.id,
            address_id = address_id,
            is_primary = form.data['is_primary']
        )
        db.session.add(address)
        db.session.commit()

        return address.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# =============== Update primary address ================
# @address_routes.route('/<int:address_id>', methods=['PUT'])
# @login_required
# def change_primary_address(address_id):
#     pass

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
        address.first_name = form.data['first_name']
        address.last_name = form.data['last_name']
        address.street = form.data['street']
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
            "message": "Address was deleted successfully",
            "statusCode": 200
        }, 200
