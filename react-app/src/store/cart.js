const GET_CART_ITEMS = "cart/GET_CART_ITEMS"

const actionGetCartItems = (items) => ({
    type: GET_CART_ITEMS,
    items
})

export const thunkGetCartItems = () => async (dispatch)=>{
    const response = await fetch('/api/cart')
    const data = await response.json()
    console.log("data in cart thunkkkkk0",data)
    if( response.ok ){
        dispatch(actionGetCartItems(data.Cart_items))
    }
}

const cartReducer = ( state={}, action ) => {
    let newState = {}
    switch ( action.type ) {
        case GET_CART_ITEMS:
            action.items.forEach(item=>{
                newState[item.id] = item
            })
            return newState
        default:
            return state
    }
}

export default cartReducer
