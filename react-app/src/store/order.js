const GET_ALL_ORDERS = "order/GET_ALL_ORDERS"
const CREATE_ORDER = "order/CREATE_ORDER"
const CANCEL_ORDER = "order/CANCEL_ORDER"
const DELETE_ORDER = "order/DELETE_ORDER"

const actionGetOrders = (orders) => ({
    type: GET_ALL_ORDERS,
    orders
})

const actionCreateOrder = (order) => ({
    type: CREATE_ORDER,
    order
})

const actionCancelOrder = (order) =>({
    type: CANCEL_ORDER,
    order
})

const actionDeleteOrder = (orderId) => ({
    type: DELETE_ORDER,
    orderId
})

export const thunkGetOrders = () => async (dispatch)=>{
    const response = await fetch('/api/orders/current')
    const data = await response.json()
    if(response.ok){
        dispatch(actionGetOrders(data.Orders))
    }
}

export const thunkCreateOrder =(userId, addressId) => async (dispatch) => {
    const response = await fetch('/api/orders/new', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_id": userId,
            "address_id": addressId,
        })
    })
    // console.log("create order response in thunk",response)
    if (response.ok){
        const data = await response.json()
        dispatch(actionCreateOrder(data))
        return null
    } else if (response.status < 500) {
        const data = await response.json()
        if (data.errors) {
            return data.errors
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const thunkCancelOrder = (orderId) => async (dispatch) => {
    const response = await fetch(`/api/orders/${orderId}`, {
        method: "PUT",
    })
    if (response.ok){
        const data = await response.json()
        console.log("cancel order data in thunk", data)
        dispatch(actionCancelOrder(data))
    }
}

export const thunkDeleteOrder = (orderId) => async(dispatch) => {
    const response = await fetch(`/api/orders/${orderId}`, {
        method: "DELETE"
    })
    if (response.ok){
        dispatch(actionDeleteOrder(orderId))
        return response
    }
}

const orderReducer = (state={}, action) => {
    let newState = {}
    switch (action.type){
        case GET_ALL_ORDERS:
            action.orders.forEach(order => {
                newState[order.id] = order
            })
            return newState

        case CREATE_ORDER:
            newState = {...state}
            newState[action.order.id] = action.order
            return newState

        case CANCEL_ORDER:
            newState = {
                ...state,
                [action.order.id]: action.order
            }
            return newState

        case DELETE_ORDER:
            newState = {
                ...state
            }
            delete newState[action.orderId]
            return newState

        default:
            return state
    }
}

export default orderReducer
