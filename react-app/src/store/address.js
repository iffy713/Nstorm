const GET_ALL_ADDRESSES = "address/GET_ALL_ADDRESSES"
const GET_SINGLE_ADDRESS = "address/GET_SINGLE_ADDRESS"

const actionGetAllAddresses = (addresses) => ({
    type: GET_ALL_ADDRESSES,
    addresses
})

const actionGetSingleAddress = (address) => ({
    type: GET_SINGLE_ADDRESS,
    address
})

// ==============   Thunk   ==================
// -------------- Get all address of current user --------------
export const thunkGetAllAddresses = () => async (dispatch) => {
    const response = await fetch('/api/addresses/current')
    const data = await response.json()
    if (response.ok) {
        dispatch(actionGetAllAddresses(data.Addresses))
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

        default:
            return state
    }
}

export default addressReducer
