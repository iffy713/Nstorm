import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetProductReviews } from '../../store/review';
import CreateReviewFormModal from '../CreateReviewFormModal';
import StarRating from 'react-star-ratings'
import SingleReview from './SingleReview';
import "./Reviews.css"



export default function Reviews({product, productId, avgRating, numOfReviews}) {

    const dispatch = useDispatch()
    const productReviewsObj = useSelector(state => state.review)
    const productReviewsArr = Object.values(productReviewsObj)

    let userId
    const currUser = useSelector(state => state.session.user)
    if(currUser){
        userId = currUser.id
    }

    const userReview = productReviewsArr.find(review => review.user_id === userId)


    useEffect(()=>{
        dispatch(thunkGetProductReviews(productId))

    }, [dispatch, productId])



    return (
        <div>
            <div id='review-header-outer'>
                <div id='review-title-ctn'>
                    <h3>
                        REVIEWS
                    </h3>
                </div>
                <div id='review-header-ctn'>
                    <div>
                        <div>
                            <StarRating
                                numberOfStars={5}
                                rating={avgRating}
                                starRatedColor="rgb(57, 57, 57)"
                                starEmptyColor="rgb(227, 227, 227)"
                                starDimension='18px'
                                starSpacing='2px'
                            /> <span>({numOfReviews})</span>
                            {avgRating === 0?(
                                <div>
                                    <div>0</div>
                                    <div>
                                        <h5>No reviews yet-be the first!</h5>
                                    </div>
                                </div>
                            ):(
                                <div>{avgRating} out of 5</div>
                            )}
                        </div>
                    </div>
                    <div id='create-review-btn-ctn'>
                        {!userReview && (
                            <CreateReviewFormModal product={product} productId={productId} />
                        )}
                    </div>
                </div>
            </div>

            
            {productReviewsArr.map(review => (
                <div key={review.id}>
                    <SingleReview review={review} numOfReviews={numOfReviews}/>
                </div>
            ))}
        </div>
    )
}
