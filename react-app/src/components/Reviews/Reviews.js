import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetProductReviews } from '../../store/review';
import CreateReviewFormModal from '../CreateReviewFormModal';
// import RatingStars from './RatingStars';
import SingleReview from './SingleReview';



export default function Reviews({productId}) {

    const dispatch = useDispatch()
    const productReviewsObj = useSelector(state => state.review)
    const productReviewsArr = Object.values(productReviewsObj)

    let userId
    const currUser = useSelector(state => state.session.user)
    if(currUser){
        userId = currUser.id
    }
    // const userReview = productReviewsArr.filter(review => review.User.id === currUserId)
    // console.log("user review", userReview)
    const userReview = productReviewsArr.find(review => review.user_id === userId)
    // console.log(userReview)

    useEffect(()=>{
        dispatch(thunkGetProductReviews(productId))
    }, [dispatch, productId])



    return (
        <div>
            Review Component
            {/* <RatingStars />  */}
            {!userReview && (
                <CreateReviewFormModal productId={productId} />
            )}


            {productReviewsArr.map(review => (
                <div key={review.id}>
                    <SingleReview review={review}/>
                </div>
            ))}
        </div>
    )
}
