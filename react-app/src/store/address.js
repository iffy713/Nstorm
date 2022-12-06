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
    // console.log("data in thunkkkkkkkk",data)
    if (response.ok) {
        dispatch(actionGetAllAddresses(data))
    }
}


// ============   Reducer   ==================
const initialState = { Addresses: {} }
const addressReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_ALL_ADDRESSES:
        const allAddress = {}
        console.log("data in reducer~~~~",action.addresses)
        action.addresses.Addresses.forEach(address=>{
            allAddress[address.id] = address
        })
        return {
            Addresses: allAddress
        }

        default:
            return state
    }
}

export default addressReducer
