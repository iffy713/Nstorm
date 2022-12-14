const GET_ALL_PRODUCTS = "product/GET_ALL_PRODUCT"
const GET_SINGLE_PRODUCT = "product/GET_SINGLE_PRODUCT"

const actionGetAllProducts = (products) => ({
    type: GET_ALL_PRODUCTS,
    products
})

const actionGetSingleProduct = (product) => ({
    type: GET_SINGLE_PRODUCT,
    product
})

export const thunkGetAllProducts = () => async (dispatch) => {
    const response = await fetch('/api/products')
    const data = await response.json()
    if (response.ok) {
        dispatch(actionGetAllProducts(data.Products))
    }
}

export const thunkGetSingleProduct = (id) => async (dispatch) => {
    const response = await fetch(`/api/products/${id}`)
    const data = await response.json()
    if (response.ok) {
        dispatch(actionGetSingleProduct(data))
    }
}

const initialState = { allProducts: {}, singleProduct: {} }
const productReducer = (state=initialState, action) => {
    let newState
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            newState = { allProducts:{}, singleProduct:{} }
            action.products.forEach(product => (
                newState.allProducts[product.id] = { ...product }
            ))
            return newState

        case GET_SINGLE_PRODUCT:
            newState = { allProducts:{}, singleProduct:{} }
            newState.singleProduct = action.product
            return newState

        default:
            return state
    }
}

export default productReducer
