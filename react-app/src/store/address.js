const GET_ALL_ADDRESSES = "address/GET_ALL_ADDRESSES"
const CREATE_ADDRESS = "address/CREATE_ADDRESS"
const UPDATE_ADDRESS = "address/UPDATE_ADDRESS"
const DELETE_ADDRESS = "address/DELETE_ADDRESS"

const actionGetAllAddresses = (addresses) => ({
    type: GET_ALL_ADDRESSES,
    addresses
})

const actionCreateAddress = (address) => ({
    type: CREATE_ADDRESS,
    address
})

const actionUpdateAddress = (address) => ({
    type: UPDATE_ADDRESS,
    address
})

const actionDeleteAddress = (addressId) => ({
    type: DELETE_ADDRESS,
    addressId
})


// ==============   Thunk   ==================
// -------------- Get all address of current user --------------
export const thunkGetAllAddresses = () => async (dispatch) => {
    const response = await fetch('/api/addresses/current')
    const data = await response.json()
    console.log("address data in thunk",data)
    if (response.ok) {
        dispatch(actionGetAllAddresses(data.Addresses))
    }
}

export const thunkCreateAddress = (street, city, state, zipCode, primary) => async (dispatch) => {
    const response = await fetch('/api/addresses', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            street,
            city,
            state,
            "zip_code": zipCode,
            "is_primary": primary
        })
    })
    if (response.ok) {
        const newAddress = await response.json()
        dispatch(actionCreateAddress(newAddress))
        return newAddress
    } else if (response.status < 500) {
        // console.log("error response in thunk", response.json())
        const data = await response.json()
        // console.log("error data in thunk",data)
        if (data.errors) {
            return data.errors
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const thunkUpdateAddress = (address_id, address) => async (dispatch) => {
    const response = await fetch(`/api/addresses/${address_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(address)
    })
    if(response.ok){
        const data = await response.json()
        dispatch(actionUpdateAddress(data))
        return data
    }
}

export const thunkDeleteAddress = (address_id) => async (dispatch) => {
    const response = await fetch(`/api/addresses/${address_id}`, {
        method: "DELETE"
    })
    if(response.ok){
        await dispatch(actionDeleteAddress(address_id))
        return response
    }
}




// ============   Reducer   ==================
const addressReducer = (state={}, action) => {
    let newState = {};
    switch (action.type) {
        case GET_ALL_ADDRESSES:
        action.addresses.forEach(address=>{
            newState[address.id] = address
        })
        return newState

        case CREATE_ADDRESS:
            newState = {...state}
            newState[action.address.id] = action.address
            return newState

        case UPDATE_ADDRESS:
            newState = {
                ...state,
                [action.address.id]: action.state
            }
            return newState

        case DELETE_ADDRESS:
            newState = {
                ...state
            }
            delete newState[action.addressId]
            return newState

        default:
            return state
    }
}

export default addressReducer
