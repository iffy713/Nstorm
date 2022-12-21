import { useState } from "react"
import { useDispatch } from "react-redux"
import { thunkCreateReview, thunkGetProductReviews } from "../../store/review"


export default function CreateReviewForm({setShowModal, productId}){

    const dispatch = useDispatch()
    const [ headline, setHeadline ] = useState("")
    const [ stars, setStars ] = useState(5)
    const [ review, setReview ] = useState("")
    const [ errors, setErrors ] = useState([])
    // console.log(productId)

    const rating = [1,2,3,4,5]
    const handleSubmit = async (e) => {
        e.preventDefault()
        // ----------solution 1----------
        // await dispatch(thunkCreateReview(productId, stars, headline, review)).then(async(error)=>{
        //     await dispatch(thunkGetProductReviews(productId))
        //     if (error) {
        //         setErrors(error)
        //     } else {
        //         setShowModal(false)
        //     }
        // })
        //--
        const data = await dispatch(thunkCreateReview(productId, stars, headline, review)).then(async()=>dispatch(thunkGetProductReviews(productId)))
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
                    <label htmlFor="rating">Rating</label>
                    <select>
                        {rating.map(rate=>(
                            <option key={rate}
                                name={"rating"}
                                value={stars}
                                onChange={e => setStars(e.target.value)}
                            >{rate}</option>
                        ))}
                    </select>
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
