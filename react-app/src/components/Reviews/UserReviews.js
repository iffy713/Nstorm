import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetUserReviews } from "../../store/review";
import EmptyReview from "./EmptyReview";
import UserSingleReview from "./UserSingleReview";
import "./UserReviews.css"


export default function UserReviews() {


    const dispatch = useDispatch()
    const userReviewsObj = useSelector(state => state.review)
    const userReviewsArr = Object.values(userReviewsObj)

    useEffect(()=> {
        dispatch(thunkGetUserReviews())
    },[dispatch])

    return (
        <div>
            <div>
                <h4>Reviews</h4>
            </div>
            { userReviewsArr.length === 0?(
                <div><EmptyReview /></div>
            ):(
                <div>
               {userReviewsArr.map(review => {
                    if (!review) return
                    return (
                    <div key={review.id}>
                        <UserSingleReview review={review}/>
                    </div>
                    )
                })}
        </div>
            ) }
        </div>
    )
}
