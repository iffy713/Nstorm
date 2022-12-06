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
export const thunkGetAllAddresses() => async (dispatch) => {
    const response = await fetch('/api/current')
    const data = await response.json()
    if (response.ok) {
        dispatch(actionGetAllAddresses())
    }
}


// ============   Reducer   ==================
const initialState = { Addresses: {} }
const addressReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_ALL_ADDRESSES:

    }
}
