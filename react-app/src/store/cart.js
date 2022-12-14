const GET_CART_ITEMS = "cart/GET_CART_ITEMS"
const ADD_TO_CART = "cart/ADD_TO_CART"
const UPDATE_ITEM_QUANTITY = "cart/UPDATE_ITEM_QUANTITY"
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART"

const actionGetCartItems = (items) => ({
    type: GET_CART_ITEMS,
    items
})

const actionAddToCart = (item) => ({
    type: ADD_TO_CART,
    item
})

const actionUpdateItemQuantity = (itemId, quantity) => ({
    type: UPDATE_ITEM_QUANTITY,
    itemId,
    quantity
})

const actionRemoveCartItem = (itemId) => ({
    type: REMOVE_FROM_CART,
    itemId
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
        body: JSON.stringify({"quantity": quantity})
    })
    if(response.ok) {
        const data = await response.json()
        dispatch(actionAddToCart(data))
        return data
    }
}

export const thunkUpdateItemQuantity = (item_id, quantity) => async (dispatch) => {
    const response = await fetch( `/api/cart/${item_id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({quantity})
    })
    if(response.ok) {
        const data = await response.json()
        dispatch(actionUpdateItemQuantity(item_id, quantity))
        return data
    } else {
        const data = await response.json()
        return data.errors
    }
}

export const thunkRemoveCartItem = (item_id) => async (dispatch) => {
    const response = await fetch(`/api/cart/${item_id}`, {
        method: "DELETE"
    })
    if(response.ok) {
        const data = await response.json()
        dispatch(actionRemoveCartItem(item_id))
        return data
    } else {
        const data = await response.json()
        return data.errors
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
                ...state,
            }
            newState[action.item.id] = action.item
            return newState

        case UPDATE_ITEM_QUANTITY:
            newState = {
                ...state
            }
            newState[action.itemId].quantity = action.quantity
            return newState

        case REMOVE_FROM_CART:
            newState = {
                ...state
            }
            delete newState[action.itemId]
            return newState

        default:
            return state
    }
}

export default cartReducer
