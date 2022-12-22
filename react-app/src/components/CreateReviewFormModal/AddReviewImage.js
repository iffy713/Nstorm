import { useState } from "react"
import { useHistory } from "react-router-dom"


export default function AddReviewImages({review, handleImageSubmit}){

    const history = useHistory()
    const [ image, setImage ] = useState(null)
    const [ imageLoading, setImageLoading ] = useState(false)
    const reviewId = review.id


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("image", image)

        setImageLoading(true)

        const res = await fetch(`/api/reviews/${reviewId}/images`, {
            method: "POST",
            body: formData
        })

        if(res.ok) {
            await res.json()
            setImageLoading(false)
            // history.push("/images")
        }
        else {
            setImageLoading(false)
            console.log("error")
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0]
        setImage(file)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={updateImage}/>
                <button type="submit">Upload</button>
                { imageLoading && <p>Loading...</p> }
            </form>
        </div>
    )
}
