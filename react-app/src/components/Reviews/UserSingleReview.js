export default function UserSingleReview({review}) {

    const timeString = review.created_at
    const date = new Date(timeString)
    const year = date.getFullYear()
    const month = date.getMonth() +1
    const day = date.getDate()
    const newTimeString = `${year}-${month}-${day}`

    if (!review || !review.Product) return null
    return (
        <div>
            {review.Product.name}
            {newTimeString}
            stars{review.stars}

        </div>

    )
}
