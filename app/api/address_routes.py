from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from sqlalchemy.orm import joinedload
from app.models import db, Address, user_addresses, User
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
@address_routes.route('/')
def get_all_addresses():
    output = []
    addresses = Address.query.all()
    for address in addresses:
        output.append(address.to_dict())
    return jsonify({"Addresses":output})


# =========== Get all addresses of current user ===========
@address_routes.route('/current')
@login_required
def get_current_user_addresses():
    # output = []
    # real_output = []

    # addresses = Address.query.options(joinedload(Address.users)).all()
    # print("addresses here",addresses)

    # for address in addresses:
    #     output.append(address.to_dict_with_users())
    # print(output)

    # for single_address in output:
    #     for i in single_address["Users"]:
    #         print("=========", i)
    #         if i["id"] == current_user.id:
    #             real_output.append(i)

    # print("am i correct??????",real_output)
    # return jsonify(real_output)
    # return "testing"
    output = []
    addresses = Address.query.options(joinedload(Address.users)).all()
    print("addresses here", addresses)

    for address in addresses:
        output.append(address.to_dict_with_users())
    return jsonify(output)

# =========== Create an addresses ===========
@address_routes.route('/', methods=['POST'])
@login_required
def create_new_address():
    form = AddressForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        address = Address(
            address_line1 = form.data['address_line1'],
            address_line2 = form.data['address_line2'],
            unit_number = form.data['unit_number'],
            city = form.data['city'],
            state = form.data['state'],
            zip_code = form.data['zip_code']
        )
        db.session.add(address)
        db.session.commit()
        return address.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# @address_routes.route('/', methods=['POST'])
# @login_required
# def user_update_address():
#     form = AddressForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

# =========== Delete an address ==============
# ========= how to verify address was created by user? ==========
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
