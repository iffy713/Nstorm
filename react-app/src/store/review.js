const GET_PRODUCT_REVIEWS = "review/GET_PRODUCT_REVIEW"
const GET_USER_REVIEWS = "review/GET_USER_REVIEWS"

const actionGetProductReviews = (reviews) => ({
    type: GET_PRODUCT_REVIEWS,
    reviews
})

const actionGetUserReviews = (reviews) => ({
    type: GET_USER_REVIEWS,
    reviews
})

export const thunkGetProductReviews = (productId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}/reviews`)
    const data = await response.json()
    console.log("reviews of products in thunk", data)

    if(response.ok) {
        dispatch(actionGetProductReviews(data.Reviews))
    }
}

export const thunkGetUserReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews/current')
    const data = await response.json()
    console.log("reviews of current user in thunk", data)

    if(response.ok) {
        dispatch(actionGetUserReviews(data.Reviews))
    }
}

const reviewReducer = (state={}, action) => {
    let newState = {}
    switch (action.type) {
        case GET_PRODUCT_REVIEWS:
            action.reviews.forEach(review => {
                newState[review.id] = review
            })
            return newState

        case GET_USER_REVIEWS:
            action.reviews.forEach(review =>  {
                newState[review.id] = review
            })
            return newState


        default:
            return state
    }
}

export default reviewReducer
