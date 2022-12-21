const GET_PRODUCT_REVIEWS = "review/GET_PRODUCT_REVIEW"
const GET_USER_REVIEWS = "review/GET_USER_REVIEWS"
const CREATE_REVIEW = "review/CREATE_REVIEW"
const DELETE_REVIEW = "review/DELETE_REVIEW"

const actionGetProductReviews = (reviews) => ({
    type: GET_PRODUCT_REVIEWS,
    reviews
})

const actionGetUserReviews = (reviews) => ({
    type: GET_USER_REVIEWS,
    reviews
})

const actionCreateReview = (review) => ({
    type: CREATE_REVIEW,
    review
})

const actionDeleteReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
})

export const thunkGetProductReviews = (productId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}/reviews`)
    const data = await response.json()
    // console.log("reviews of products in thunk", data)

    if(response.ok) {
        dispatch(actionGetProductReviews(data.Reviews))
    }
}

export const thunkCreateReview = (productId, headline, review) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}/reviews`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            headline,
            review
        })
    })
    if (response.ok){
        const newReview = await response.json()
        dispatch(actionCreateReview(newReview))
        return null
    } else if (response.status < 500) {
        const error = await response.json()
        if (error.errors) {
            return error.errors
        }
    } else {
        return ['An error occurred. Please try again.']
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

export const thunkDeleteReview = (review_id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${review_id}`, {
        method: "DELETE"
    })
    if (response.ok) {
        await dispatch(actionDeleteReview(review_id))
        return response
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

        case CREATE_REVIEW:
            newState = { ...state }
            newState[action.review.id] = action.review
            return newState

        case DELETE_REVIEW:
            newState = { ...state }
            delete newState[action.reviewId]
            return newState

        default:
            return state
    }
}

export default reviewReducer
