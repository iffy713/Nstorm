const GET_ALL_ORDERS = "order/GET_ALL_ORDERS"

const actionGetOrders = (orders) => ({
    type: GET_ALL_ORDERS,
    orders
})

export const thunkGetOrders = () => async (dispatch)=>{
    const response = await fetch('/api/orders/current')
    const data = await response.json()
    if(response.ok){
        dispatch(actionGetOrders(data.Orders))
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
        default:
            return state
    }
}

export default orderReducer
