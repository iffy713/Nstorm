const GET_PRODUCT_REVIEWS = "review/GET_PRODUCT_REVIEW"
const GET_USER_REVIEWS = "review/GET_USER_REVIEWS"
const CREATE_REVIEW = "review/CREATE_REVIEW"
const EDIT_REVIEW = "review/EDIT_REVIEW"
const DELETE_REVIEW = "review/DELETE_REVIEW"

const ADD_REVIEW_IMG = "review/ADD_REVIEW_IMG"

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

const actionUpdateReview = (review) => ({
    type: EDIT_REVIEW,
    review
})

const actionDeleteReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
})

const actionAddReviewImg = (reviewId, img) => ({
    type: ADD_REVIEW_IMG,
    reviewId,
    img
})

export const thunkGetProductReviews = (productId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}/reviews`)
    const data = await response.json()
    // console.log("reviews of products in thunk", data)

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

export const thunkCreateReview = (productId, stars, headline, review) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}/reviews`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            stars,
            headline,
            review
        })
    })
    if (response.ok){
        // console.log("create review in thunk", response)
        const newReview = await response.json()

        // console.log("!!!!!!!", newReview.id)
        // // ^^ get id of new review

        dispatch(actionCreateReview(newReview))
        // console.log("~~~~~~~~~", newReview)
        return newReview.id
    } else if (response.status < 500) {
        // console.log("bad data from review thunk", response)
        const error = await response.json()
        if (error.errors) {
            return error.errors
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const thunkAddReviewImage = (reviewId, image) => async (dispatch) => {

    const formData = new FormData()
    formData.append("image", image)

    const response = await fetch(`/api/reviews/${reviewId}/images`, {
        method: "POST",
        body: formData
    })


    if (response.ok){
        const reviewImageUrl = await response.json()
        dispatch(actionAddReviewImg(reviewId, reviewImageUrl))
        return null
    } else if(response.status < 500){
        const error = await response.json()
        if(error.errors){
            return error.errors
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const thunkUpdateReview = (reviewId, review) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(actionUpdateReview(data))
        return null
    } else if (response.status < 500) {
        const data = await response.json()
        if (data.errors){
            return data.errors
        }
    } else {
        return ['An error occurred. Please try again.']
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

        case EDIT_REVIEW:
            newState = { ...state,
                [action.review.id]: action.review
            }
            return newState

        case DELETE_REVIEW:
            newState = { ...state }
            delete newState[action.reviewId]
            return newState

        case ADD_REVIEW_IMG:
            newState = { ...state }
            newState[action.reviewId].Review_images.push(action.reviewImageUrl)

        default:
            return state
    }
}

export default reviewReducer
