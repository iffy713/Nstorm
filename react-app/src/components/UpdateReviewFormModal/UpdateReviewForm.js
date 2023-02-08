import { useState } from "react"
import { useDispatch } from "react-redux"
import { thunkGetUserReviews, thunkUpdateReview } from "../../store/review"
import StarRating from 'react-star-ratings'


export default function UpdateReviewForm({review, setShowModal}) {

    const dispatch = useDispatch()
    const [ updatedStars, setStars ] = useState(review.stars)
    const [ updatedHeadline, setHeadline ] = useState(review.headline)
    const [ updatedReview, setReview ] = useState(review.review)
    const [ errors, setErrors ] = useState([])


    const handleUpdate = async(e) => {
        e.preventDefault()
        const newReview = {
            "stars": updatedStars,
            "headline": updatedHeadline,
            "review": updatedReview
        }
        const data = await dispatch(thunkUpdateReview(review.id, newReview))
        if (data) {
            setErrors(data)
        } else {
            dispatch(thunkGetUserReviews())
            setShowModal(false)
        }
    }

    return (
        <div>
            <h2>
                Edit review
            </h2>
            <form onSubmit={handleUpdate} className="review-form">
                <div className='error-list-ctn'>
                    {errors.map(error=>(
                        <div key={error}>{error}</div>
                    ))}
                </div>
                <div className='form-label-ctn'>
                    <label htmlFor="rating">Rating<span className='red-star-span'>*</span></label>
                    {/* <select value={updatedStars} onChange={e=>setStars(e.target.value)}>
                        {rating.map(rate=>(
                            <option key={rate}>{rate}</option>
                        ))}
                    </select> */}
                <div>
                    <StarRating
                        isSelectable={true}
                        rating={updatedStars}
                        changeRating={(rating) => setStars(rating)}
                        numberOfStars={5}
                        starHoverColor="rgb(57,57,57)"
                        starRatedColor="rgb(57, 57, 57)"
                        starEmptyColor="rgb(227, 227, 227)"
                        starDimension='18px'
                        starSpacing='2px'
                    />
                </div>

                </div>
                <div className='form-label-ctn'>
                    <label>Headline</label>
                    <input value={updatedHeadline} onChange={e=>setHeadline(e.target.value)}/>
                </div>
                <div className='form-label-ctn'>
                    <label>Review</label>
                </div>
                <div>
                    <textarea
                        value={updatedReview}
                        onChange={e=>setReview(e.target.value)}
                        placeholder="Write about what you did or didn't like about this product. Include details that would be helpful to other shoppers."
                    />
                </div>
                <div>
                    <button className="submit-review-btn" type="submit">Update Review</button>
                    <button onClick={()=>setShowModal(false)} id='cancel-review-btn'>Cancel</button>
                </div>
            </form>
        </div>
    )
}
