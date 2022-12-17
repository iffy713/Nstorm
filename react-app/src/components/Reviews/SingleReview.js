export default function SingleReview({review}) {

    console.log(review)
    const timeString = review.created_at
    const date = new Date(timeString)
    const year = date.getFullYear()
    const month = date.getMonth() +1
    const day = date.getDate()
    const newTimeString = `${year}-${month}-${day}`

    return (
        <div>
            <div>
                {review.User.first_name}
                {review.User.last_name}
            </div>
            <div>
                {newTimeString}
                rate {review.stars}
            </div>
            {review.review}
        </div>
    )
}
