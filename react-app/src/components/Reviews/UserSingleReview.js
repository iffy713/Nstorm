import { useDispatch } from "react-redux"
import { thunkDeleteReview } from "../../store/review"
import UpdateReviewFormModal from "../UpdateReviewFormModal"
import StarRating from 'react-star-ratings'
import "./UserSingleReview.css"

export default function UserSingleReview({review}) {

    const dispatch = useDispatch()
    const timeString = review.created_at
    const date = new Date(timeString)
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    // const year = date.getFullYear()
    // const month = date.getMonth() +1
    // const day = date.getDate()
    // const newTimeString = `${year}-${month}-${day}`

    console.log("review is here", review)

    if (!review || !review.Product) return null
    return (
        <div>
            <div id="user-single-review-ctn">
                <div id="user-review-product-ctn">
                    <div>
                        <img src={review.Product.preview_image} style={{"width":"150px","height":"200px"}}/>
                    </div>
                    <div id="user-review-product-name-ctn">
                        {review.Product.name}
                    </div>
                </div>
                <div id='user-review-details-outer'>
                    <div id='user-review-details-ctn'>
                        <div>
                            Created Date: {formattedDate}
                        </div>
                        <div>
                            Stars: <span>
                                <StarRating
                                    numberOfStars={5}
                                    rating={review.stars}
                                    starRatedColor="rgb(57, 57, 57)"
                                    starEmptyColor="rgb(227, 227, 227)"
                                    starDimension='18px'
                                    starSpacing='2px'
                                /></span>
                        </div>
                        <div>
                            Headline: <span>{review.headline}</span>
                        </div>
                        <div>
                            Review: "{review.review}"
                        </div>
                    </div>
                </div>
            </div>
                <UpdateReviewFormModal review={review}/>
                <button onClick={()=> dispatch(thunkDeleteReview(review.id))}>Delete</button>
        </div>

    )
}
