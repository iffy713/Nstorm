import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetUserReviews } from "../../store/review";
import EmptyReview from "./EmptyReview";
import UserSingleReview from "./UserSingleReview";


export default function UserReviews() {


    const dispatch = useDispatch()
    const userReviewsObj = useSelector(state => state.review)
    const userReviewsArr = Object.values(userReviewsObj)
    console.log("@@@@@@@@@@@", userReviewsArr)

    useEffect(()=> {
        dispatch(thunkGetUserReviews())
    },[dispatch])

    return userReviewsArr.length===0?(
        <div>
            <EmptyReview />
        </div>
    ):(
        <div>
            {userReviewsArr.map(review => {
                if (!review) return
                return (
                    <div>
                        <UserSingleReview review={review}/>
                    </div>
                )
            })}
        </div>
    )
}
