import { useDispatch } from "react-redux"
import { thunkDeleteReview } from "../../store/review"
import UpdateReviewFormModal from "../UpdateReviewFormModal"
import StarRating from 'react-star-ratings'
import "./UserSingleReview.css"
import Spinner from "../Spinner/Spinner"

export default function UserSingleReview({review}) {

    const dispatch = useDispatch()
    const timeString = review.created_at
    const date = new Date(timeString)
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);


    console.log("review is here", review)

    if (!review || !review.Product || !review.Review_images) return <Spinner />
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
                            Created on {formattedDate}
                        </div>
                        <div>
                            <span>
                                <StarRating
                                    numberOfStars={5}
                                    rating={review.stars}
                                    starRatedColor="rgb(57, 57, 57)"
                                    starEmptyColor="rgb(227, 227, 227)"
                                    starDimension='18px'
                                    starSpacing='2px'
                                /></span>
                        </div>
                        <div id="headline-and-review-ctn">
                            <div>
                                {review.headline}
                            </div>
                            <div style={{"marginTop":"5px", "overflow":"hidden", "maxWidth":"400px"}}>
                                "{review.review}"
                            </div>
                        </div>
                        <div className="user-review-edit-delete-btn-ctn">
                            <UpdateReviewFormModal review={review} product={review.Product}/>
                            <button onClick={()=> dispatch(thunkDeleteReview(review.id))}
                                className='delete-review-btn'>
                                Delete this review
                            </button>
                        </div>

                    </div>
                </div>
                {review.Review_images.length?(
                    <div style={{"marginLeft": "30px", "marginTop":"50px"}}>
                        <img src={review.Review_images[0].url} style={{"objectFit":"cover", "objectPosition":"center","width":"100px", "height":"100px"}}/>
                    </div>):(<div></div>)}
            </div>
        </div>

    )
}
