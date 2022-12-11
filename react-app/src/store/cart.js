const GET_CART_ITEMS = "cart/GET_CART_ITEMS"
const ADD_TO_CART = "cart/ADD_TO_CART"
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART"

const actionGetCartItems = (items) => ({
    type: GET_CART_ITEMS,
    items
})

const actionAddToCart = (item) => ({
    type: ADD_TO_CART,
    item
})

export const thunkGetCartItems = () => async (dispatch)=>{
    const response = await fetch('/api/cart')
    const data = await response.json()
    console.log("data in cart thunkkkkk0",data)
    if( response.ok ){
        dispatch(actionGetCartItems(data.Cart_items))
    }
}

export const thunkAddToCart = (id, quantity) => async (dispatch) => {
    const response = await fetch(`/api/products/${id}/cart`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({quantity})
    })
    if(response.ok) {
        const data = await response.json()
        dispatch(actionAddToCart(data))
        return data
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

        case ADD_TO_CART:
            newState={
                ...newState,
            }
            newState[action.item.id] = action.item
            return newState

        default:
            return state
    }
}

export default cartReducer
