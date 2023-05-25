const GET_ALL_PRODUCTS = "product/GET_ALL_PRODUCT"
const GET_SINGLE_PRODUCT = "product/GET_SINGLE_PRODUCT"
const SEARCH_PRODUCT = "product/SEARCH_PRODUCT"
// const GET_CATEGORIES = "product/GET_CATEGORIES"
// const GET_CATEGORIZED_PRODUCTS = "product/GET_CATEGOIZED_PRODUCTS"

const actionGetAllProducts = (products) => ({
    type: GET_ALL_PRODUCTS,
    products
})

const actionGetSingleProduct = (product) => ({
    type: GET_SINGLE_PRODUCT,
    product
})

const actionSearchProduct = (products) => ({
    type: SEARCH_PRODUCT,
    products
})

// const actionGetCategories = (categories) => ({
//     type: GET_CATEGORIES,
//     categories
// })

// const actionGetCategorizedProducts = (products) => ({
//     type: GET_CATEGORIZED_PRODUCTS,
//     products
// })


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


export const thunkSearchProducts = (keyword) => async (dispatch) => {
    // console.log("testing search now")
    const response = await fetch(`/api/products/search/${keyword}`)
    const data = await response.json()
    if (response.ok) {
        dispatch(actionSearchProduct(data.filted_products))
    }
}

// export const thunkGetCategories = () => async(dispatch) => {
//     const response = await fetch('/api/products/categories')
//     if(response.ok){
//         const data = await response.json()
//         dispatch(actionGetCategories(data.Categories))
//     }
// }


// export const thunkCategoryProducts = (categoryId) => async (dispatch) => {
//     const response = await fetch(`/api/products/categories/${categoryId}`)
//     if ( response.ok ) {
//         const data = await response.json()
//         dispatch(actionGetCategorizedProducts(data.Products))
//     }
// }

const initialState = { allProducts: {}, singleProduct: {}, filtedProducts: {} }
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

        case SEARCH_PRODUCT:
            newState = {
                allProducts: {...state.allProducts},
                singleProduct:{...state.singleProduct},
                filtedProducts:{}
            }
            newState.filtedProducts = action.products
            return newState

        // case GET_CATEGORIES:
        //     newState = { allProducts:{}, singleProduct:{}, categories:{} }
        //     action.categories.forEach(category => (
        //         newState.categories[category.id] = { ...category }
        //     ))
        //     return newState

        // case GET_CATEGORIZED_PRODUCTS:
        //     newState = { allProducts:{}, singleProduct:{} }
        //     newState.allProducts = action.products
        //     return newState

        default:
            return state
    }
}

export default productReducer
