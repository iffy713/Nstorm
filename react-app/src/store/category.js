const GET_CATEGORIES = "product/GET_CATEGORIES"
const GET_CATEGORIZED_PRODUCTS = "product/GET_CATEGOIZED_PRODUCTS"


const actionGetCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
})

const actionGetCategorizedProducts = (products) => ({
    type: GET_CATEGORIZED_PRODUCTS,
    products
})


export const thunkGetCategories = () => async(dispatch) => {
    const response = await fetch('/api/products/categories')
    if(response.ok){
        const data = await response.json()
        dispatch(actionGetCategories(data.Categories))
    }
}


export const thunkCategoryProducts = (categoryid) => async (dispatch) => {
    const response = await fetch(`/api/products/category/${categoryid}`)
    if ( response.ok ) {
        const data = await response.json()
        dispatch(actionGetCategorizedProducts(data.Products))
    }
}

const initialState = { allCategories: {}, singleCategory: {}, allProducts: {} }
const categoryReducer = (state=initialState, action) => {
    let newState
    switch (action.type) {
        case GET_CATEGORIES:
            newState = { allCategories: {}, singleCategory: {},allProducts: {...state.allProducts} }
            action.categories.forEach(category => (
                newState.allCategories[category.id] = { ...category }
            ))
            return newState

        case GET_CATEGORIZED_PRODUCTS:
            newState = { allProducts: {  }, allCategories : {...state.allCategories}, singleCategory: {} }
            action.products.forEach( product => (
                newState.allProducts[product.id] = { ...product }
            ) )
            return newState

        default:
            return state
    }
}


export default categoryReducer
