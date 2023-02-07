import { useState } from "react"
import { useDispatch } from "react-redux"
import { thunkAddReviewImage, thunkCreateReview, thunkGetProductReviews } from "../../store/review"
import StarRating from 'react-star-ratings'
import "./CreateReview.css"


export default function CreateReviewForm({setShowModal, productId, product}){

    const dispatch = useDispatch()
    const [ headline, setHeadline ] = useState("")
    const [ stars, setStars ] = useState(0)
    const [ review, setReview ] = useState("")
    const [ errors, setErrors ] = useState([])

    const [ image, setImage ] = useState(null)
    const [ preview, setPreview ] = useState([])

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     // ----------solution 1----------
    //     const newReview = await dispatch(thunkCreateReview(productId, stars, headline, review))
    //     // console.log("got reviewId",newReview)
    //     console.log("what is this??", newReview)

    //     if(newReview){
    //         console.log("any image here? before sending to thunk", image)
    //         await dispatch(thunkAddReviewImage(newReview.id, image)).then(async(error) => {
    //             await dispatch(thunkGetProductReviews(productId))
    //             if(error) {
    //                 setErrors(error)
    //                 console.log(errors)
    //             } else {
    //                 setShowModal(false)
    //             }
    //         })
    //     }
    // }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const data = await dispatch(thunkCreateReview(productId, stars, headline, review))
        // console.log("return data in the component",data)
        if(typeof data === 'number'){
            await dispatch(thunkAddReviewImage(data, image))
            setShowModal(false)
        } else {
            setErrors(data)
        }
        await dispatch(thunkGetProductReviews(productId))
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
            <h2>
                Write a review
            </h2>
            <div>{product.name}</div>
            <form onSubmit={handleSubmit} className="review-form">
                <div className='error-list-ctn'>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                <div className='form-label-ctn'>
                    <label htmlFor="rating">Rating<span className='red-star-span'>*</span></label>
                </div>
                <div>
                    <StarRating
                        isSelectable={true}
                        rating={stars}
                        changeRating={(rating) => setStars(rating)}
                        numberOfStars={5}
                        starHoverColor="rgb(57,57,57)"
                        starRatedColor="rgb(57, 57, 57)"
                        starEmptyColor="rgb(227, 227, 227)"
                        starDimension='18px'
                        starSpacing='2px'
                    />
                </div>

                <div className='form-label-ctn'>
                    <label htmlFor="fileInput" >
                        <button
                            class="file-button"
                            onClick={() => document.getElementById("fileInput").click()}
                        >
                        <i class="fa-solid fa-camera"></i> <span>
                            Add a photo
                        </span>
                        </button>
                    </label>
                </div>
                <div>
                    <input
                        name="fileInput"
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        onChange={handleChange}
                        multiple
                    />
                    {preview.length?(
                        <div id="upload-image-ctn">
                            {preview.map((item, index)=> (
                                <img key={index} src={item} alt="preview" id="preview-review-image"/>
                            ))}
                        </div>
                    ):(<div></div>)}
                </div>
                <div className='form-label-ctn'>
                    <label htmlFor="headline">Headline<span className='red-star-span'>*</span></label>
                </div>
                <div>
                    <input
                        name="headline"
                        type="text"
                        value={headline}
                        onChange={e => setHeadline(e.target.value)}
                        placeholder="Summarize your review in a few words." ></input>
                </div>
                <div className='form-label-ctn'>
                    <label htmlFor="review">Review<span className='red-star-span'>*</span></label>
                </div>
                <div>
                    <textarea
                        name="review"
                        value={review}
                        onChange={e => setReview(e.target.value)}
                        placeholder="Write about what you did or didn't like about this product. Include details that would be helpful to other shoppers." />
                </div>
                <div>
                    <button type="submit" id="submit-review-btn">Submit</button>
                    <button onClick={()=>setShowModal(false)} id='cancel-review-btn'>Cancel</button>
                </div>
            </form>
        </div>
    )
}
