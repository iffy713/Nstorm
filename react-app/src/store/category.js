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


export const thunkCategoryProducts = (categoryId) => async (dispatch) => {
    const response = await fetch(`/api/products/categories/${categoryId}`)
    if ( response.ok ) {
        const data = await response.json()
        dispatch(actionGetCategorizedProducts(data.Products))
    }
}

const initialState = { allCategories: {}, singleCategory: {} }
const categoryReducer = (state=initialState, action) => {
    let newState
    switch (action.type) {
        case GET_CATEGORIES:
            newState = { allCategories: {}, singleCategory: {} }
            action.categories.forEach(category => (
                newState.allCategories[category.id] = { ...category }
            ))
            return newState

        case GET_CATEGORIZED_PRODUCTS:
            newState = { allCategories: {}, singleCategory: {} }
            newState.allProducts = action.products
            return newState

        default:
            return state
    }
}


export default categoryReducer
