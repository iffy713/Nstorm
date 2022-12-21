import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetProductReviews } from '../../store/review';
import CreateReviewFormModal from '../CreateReviewFormModal';
import RatingStars from './RatingStars';
import SingleReview from './SingleReview';



export default function Reviews({productId}) {

    const dispatch = useDispatch()
    const productReviewsObj = useSelector(state => state.review)
    const productReviewsArr = Object.values(productReviewsObj)

    useEffect(()=>{
        dispatch(thunkGetProductReviews(productId))
    }, [dispatch, productId])


    return (
        <div>
            Review Component
            <RatingStars /> 
            <CreateReviewFormModal productId={productId} />
            {productReviewsArr.map(review => (
                <div key={review.id}>
                    <SingleReview review={review}/>
                </div>
            ))}
        </div>
    )
}
