import { useDispatch } from "react-redux"
import { thunkDeleteReview } from "../../store/review"

export default function UserSingleReview({review}) {

    const dispatch = useDispatch()
    const timeString = review.created_at
    const date = new Date(timeString)
    const year = date.getFullYear()
    const month = date.getMonth() +1
    const day = date.getDate()
    const newTimeString = `${year}-${month}-${day}`

    // const handleDeleteReview = () => {

    // }

    if (!review || !review.Product) return null
    return (
        <div>
            <div>
                {review.Product.name}
            </div>
            <div>
                {newTimeString}
            </div>
            <div>
                stars: {review.stars}
            </div>
            <div>
                Headline: {review.headline}
            </div>
            <div>
                Review: {review.review}
            </div>
            <button onClick={()=> dispatch(thunkDeleteReview(review.id))}>Delete</button>
        </div>

    )
}
