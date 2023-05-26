import { Link } from 'react-router-dom';
import StarRating from 'react-star-ratings'
import "./SingleProductCard.css"

export default function SingleProductCard({ product }) {


    return (
        <article key={product.id} className="single-product-card-ctn">
            <Link to={`/products/${product.id}`} className="product-card">
                <div id='single-product-card-img-ctn'>
                    <img src={product.preview_image} alt={product.name}/>
                </div>
                <div><h6>{product.brand}</h6></div>
                <div id="single-card-product-name">
                    {product.name}
                </div>
            </Link>
            <div id="single-card-product-price">${product.price}</div>
            { product.num_of_review?(
                <div id="single-card-product-rating">
                    <StarRating
                        numberOfStars={5}
                        rating={product.average_rating}
                        starRatedColor="rgb(57, 57, 57)"
                        starEmptyColor="rgb(227, 227, 227)"
                        starDimension='12px'
                        starSpacing='2px'
                    />
                    <span>({product.num_of_review})</span>
                </div>
            ):<div></div> }
            <div id="single-card-product-delivery">
                <span>Free Delivery</span>
            </div>
        </article>
    )
}
