import { useState } from "react"
import { useDispatch } from "react-redux"
import { thunkCreateReview } from "../../store/review"
import { StarRatings } from  'react-star-ratings'

export default function CreateReviewForm({setShowModal, productId}){

    const dispatch = useDispatch()
    const [ headline, setHeadline ] = useState("")
    const [ stars, setStars ] = useState("")
    const [ review, setReview ] = useState("")
    const [ errors, setErrors ] = useState([])
    // console.log(productId)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await dispatch(thunkCreateReview(productId, headline, review))
        if (data){
            setErrors(data)
        } else {
            setShowModal(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <label>Rating</label>
                </div>
                <div>
                    <label htmlFor="headline">Headline*</label>
                    <input
                        name="headline"
                        type="text"
                        value={headline}
                        onChange={e => setHeadline(e.target.value)}
                        placeholder="Summarize your review in a few words." ></input>
                </div>
                <div>
                    <label htmlFor="review">Review</label>
                    <textarea
                        name="review"
                        value={review}
                        onChange={e => setReview(e.target.value)}
                        placeholder="Write about what you did or didn't like about this product. Imclude details that would be helpful to other shoppers." />
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button onClick={()=>setShowModal(false)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
