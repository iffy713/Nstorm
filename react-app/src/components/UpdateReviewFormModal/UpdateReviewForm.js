import { useState } from "react"
import { useDispatch } from "react-redux"
import { thunkGetUserReviews, thunkUpdateReview } from "../../store/review"

export default function UpdateReviewForm({review, setShowModal}) {

    const dispatch = useDispatch()
    const [ updatedStars, setStars ] = useState(review.stars)
    const [ updatedHeadline, setHeadline ] = useState(review.headline)
    const [ updatedReview, setReview ] = useState(review.review)
    const [ errors, setErrors ] = useState([])

    const rating = [1,2,3,4,5]
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
            <form onSubmit={handleUpdate}>
                <div>
                    {errors.map(error=>(
                        <div key={error}>{error}</div>
                    ))}
                </div>
                <div>
                    <label>Stars</label>
                    <select value={updatedStars} onChange={e=>setStars(e.target.value)}>
                        {rating.map(rate=>(
                            <option key={rate}>{rate}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Headline</label>
                    <input value={updatedHeadline} onChange={e=>setHeadline(e.target.value)}/>
                </div>
                <div>
                    <label>Review</label>
                    <textarea value={updatedReview} onChange={e=>setReview(e.target.value)}/>
                </div>
                <button>Update Review</button>
            </form>
        </div>
    )
}
