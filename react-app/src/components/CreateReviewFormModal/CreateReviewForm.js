import { useState } from "react"
import { useDispatch } from "react-redux"
import { thunkCreateReview, thunkGetProductReviews } from "../../store/review"
import AddReviewImages from "./AddReviewImage"


export default function CreateReviewForm({setShowModal, productId}){

    const dispatch = useDispatch()
    const [ headline, setHeadline ] = useState("")
    const [ stars, setStars ] = useState(5)
    const [ review, setReview ] = useState("")
    const [ errors, setErrors ] = useState([])
    const rating = [1,2,3,4,5]

    // const handleImageSubmit = async (e) => {
    //     e.preventDefault()
    //     const formData = new FormData()
    //     formData.append("image", image)

    //     setImageLoading(true)

    //     const res = await fetch(`/api/reviews/${reviewId}/images`, {
    //         method: "POST",
    //         body: formData
    //     })
    //     if(res.ok) {
    //         await res.json()
    //         setImageLoading(false)
    //         // history.push("/images")
    //     }
    //     else {
    //         setImageLoading(false)
    //         console.log("error")
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(thunkCreateReview(productId, stars, headline, review))
        // .then(async error => {
        //     await handleImageSubmit()
        //     if(error) {
        //         setErrors(error)
        //     } else {
        //         setShowModal(false)
        //     }
        // })
        .then(async(error)=>{await dispatch(thunkGetProductReviews(productId))
            if (error) {
                setErrors(error)
            } else {
                setShowModal(false)
            }
        })
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
                    <select value={stars} onChange={e => setStars(e.target.value)}>
                        {rating.map(rate=>(
                            <option key={rate}
                                name={"rating"}
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
                {/* -------- Upload Review Image --------- */}
                <div>
                    <AddReviewImages review={review}/>
                    {/* <input type="file" /> */}
                </div>
                {/* -------- Upload Review Image --------- */}


                <div>
                    <button type="submit">Submit</button>
                    <button onClick={()=>setShowModal(false)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
