import StarRating from 'react-star-ratings'
import "./SingleReview.css"

export default function SingleReview({review}) {

    const timeString = review.created_at
    const date = new Date(timeString)
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    // const year = date.getFullYear()
    // const month = date.getMonth() +1
    // const day = date.getDate()
    // const newTimeString = `${year}-${month}-${day}`

    if(!review.User) return null
    return (
        <div>
            <div id="single-review-outer">
                <div id='single-review-ctn'>
                    <div id='single-review-left'>
                        <div>
                            {review.User.first_name}
                            {review.User.last_name}
                        </div>
                    </div>
                    <div id='single-review-right-outer'>
                        <div id='single-review-right'>
                            <div>
                                <StarRating
                                    numberOfStars={5}
                                    rating={review.stars}
                                    starRatedColor="rgb(57, 57, 57)"
                                    starEmptyColor="rgb(227, 227, 227)"
                                    starDimension='18px'
                                    starSpacing='2px'
                                />
                                <span style={{"marginLeft":"20px"}}>
                                    {formattedDate}
                                </span>
                            </div>
                            <div id="review-headline-ctn">
                                <h5>
                                    {review.headline}
                                </h5>
                            </div>
                            <div id='review-content-ctn'>
                                {review.review}
                            </div>
                            {review.Review_images.length >0 ?(
                                <div id='review-img-ctn'>
                                    <img src={review.Review_images[0].url} id="review-img"/>
                                </div>
                            ):<div></div>}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
