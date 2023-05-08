from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Address, UserAddress
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

        # 1. check if the new address set as primary
        is_primary = form.data.get('is_primary', False)
        if is_primary:
            # 1.1. check if user already has a primary address
            user_primary_address = UserAddress.query.filter_by(user_id=current_user.id, is_primary=True).first()
            if user_primary_address:
                user_primary_address.is_primary = False
                db.session.commit()

        # 2. create instance in Address table
        new_address = Address(
            street = form.data['street'],
            city = form.data['city'],
            state = form.data['state'],
            zip_code = form.data['zip_code']
        )
        db.session.add(new_address)
        db.session.commit()


        # 3. once address was created, get the address id to create instance in user_addresses table
        new_user_address = UserAddress(
            user_id = current_user.id,
            address_id = new_address.id,
            is_primary = form.data['is_primary']
        )
        db.session.add(new_user_address)
        db.session.commit()
        return new_user_address.to_dict_with_user_and_address()
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
        if form.validate_on_submit():
            address.street = form.data['street']
            address.city = form.data['city']
            address.state = form.data['state']
            address.zip_code = form.data['zip_code']
            db.session.commit()
            return jsonify(address.to_dict())
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

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


# ========== Set Primary Address ==============
@address_routes.route('/<int:address_id>/set_primary', methods=['PUT'])
@login_required
def set_primary_address(address_id):
    address = Address.query.get(address_id)


    current_primary_address = UserAddress.query.filter_by(user_id=current_user.id, is_primary=True)
