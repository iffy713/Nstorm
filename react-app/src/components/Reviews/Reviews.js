import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetProductReviews } from '../../store/review';
import SingleReview from './SingleReview';



export default function Reviews({productId}) {

    const dispatch = useDispatch()
    const productReviewsObj = useSelector(state => state.review)
    console.log(productReviewsObj)
    const productReviewsArr = Object.values(productReviewsObj)

    console.log("array in component",productReviewsArr)

    useEffect(()=>{
        dispatch(thunkGetProductReviews(productId))
    }, [dispatch, productId])


    return (
        <div>
            Review Component
            {productReviewsArr.map(review => (
                <div key={review.id}>
                    <SingleReview review={review}/>
                </div>
            ))}
        </div>
    )
}
