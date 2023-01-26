import { useState } from "react"
import { useDispatch } from "react-redux"
import { thunkAddReviewImage, thunkCreateReview, thunkGetProductReviews } from "../../store/review"
// import AddImage from "./AddImage"
import "./CreateReview.css"


export default function CreateReviewForm({setShowModal, productId}){

    const dispatch = useDispatch()
    const [ headline, setHeadline ] = useState("")
    const [ stars, setStars ] = useState(5)
    const [ review, setReview ] = useState("")
    const [ errors, setErrors ] = useState([])

    const [ image, setImage ] = useState(null)
    const [ preview, setPreview ] = useState([])


    const rating = [1,2,3,4,5]
    const handleSubmit = async (e) => {
        e.preventDefault()
        // ----------solution 1----------
        const newReview = await dispatch(thunkCreateReview(productId, stars, headline, review))
        // console.log("got reviewId",newReview)
        console.log("what is this??", image)

        if(newReview){
            console.log("any image here? before sending to thunk", image)
            await dispatch(thunkAddReviewImage(newReview.id, image)).then(async(error) => {
                await dispatch(thunkGetProductReviews(productId))
                if(error) {
                    setErrors(error)
                    console.log(errors)
                } else {
                    setShowModal(false)
                }
            })
        }

        // await dispatch(thunkAddReviewImage(newReview.id, image)).then(async(error) =>{
        //     await dispatch(thunkGetProductReviews(productId))
        //     if (error){
        //         setErrors(error)
        //     } else {
        //         setShowModal(false)
        //     }
        // })

        // await dispatch(thunkCreateReview(productId, stars, headline, review)).then(async(error)=>{

        //     await dispatch(thunkGetProductReviews(productId))

        //     if (error) {
        //         setErrors(error)
        //     } else {
        //         setShowModal(false)
        //     }
        // })
    }

    // =====================================
    const handleChange = e => {
        console.log("target here",e.target.files[0])
        const files = e.target.files;
        setImage(files[0])

        const previewImages = []

        for (let i = 0; i < files.length; i++){
            const file = files[i]
            const reader = new FileReader()
            reader.onload = e => {
                previewImages.push(e.target.result)
                // console.log(previewImages)
                setPreview(previewImages)
            }
            reader.readAsDataURL(file)
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
                    <select value={stars} onChange={e => setStars(e.target.value)}>
                        {rating.map(rate=>(
                            <option key={rate}
                                name={"rating"}
                            >{rate}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <input
                        name="images"
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        onChange={handleChange}
                        multiple
                    />
                    <div id="upload-image-ctn">
                        {preview.map((item, index)=> (
                            <img key={index} src={item} alt="preview" id="preview-review-image"/>
                        ))}
                    </div>
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
