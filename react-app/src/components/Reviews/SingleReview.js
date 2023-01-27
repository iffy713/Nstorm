export default function SingleReview({review}) {

    const timeString = review.created_at
    const date = new Date(timeString)
    const year = date.getFullYear()
    const month = date.getMonth() +1
    const day = date.getDate()
    const newTimeString = `${year}-${month}-${day}`

    if(!review.User) return null
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
            {review.Review_images.length >0 ?(
                <div>
                    <img src={review.Review_images[0].url} />
                </div>
            ):<div></div>}
        </div>
    )
}
