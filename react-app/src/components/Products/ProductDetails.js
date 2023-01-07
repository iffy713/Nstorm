import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { thunkAddToCart } from '../../store/cart';
import { thunkGetSingleProduct } from '../../store/product';
import { thunkGetProductReviews } from '../../store/review';
import StarRating from 'react-star-ratings'
import Reviews from '../Reviews/Reviews';
import './ProductDetails.css'
import DetailsAndCare from './DetailsAndCare';
import GiftOptions from './GiftOptions';

export default function ProductDetails() {

    const dispatch = useDispatch()
    const singleProduct = useSelector(state => state.product.singleProduct)

    // const cartItemsObj = useSelector(state => state.cartItems)
    // const cartItemsArr = Object.values(cartItemsObj)

    const { productId } = useParams()
    const [ quantity, setQuantity ] = useState(1)
    const [ loaded, setLoaded ] = useState(false)

    // set quantity selections
    let options = []
    for(let i = 1; i<=50; i++){
        options.push(i)
    }

    useEffect(()=> {
        dispatch(thunkGetSingleProduct(productId))
        // dispatch(thunkGetProductReviews(productId))
            .then(()=> setLoaded(true))
    }, [dispatch, productId])

    const handleAddToCart = async () => {
        await dispatch(thunkAddToCart(productId,quantity))
            .then(setQuantity(1))
    }

    // if(!singleProduct || !singleProduct.ProductImages) return null

    if (!singleProduct || !singleProduct.ProductImages) return null
    const productImages = Object.values(singleProduct.ProductImages)

    return (
        loaded && (
            <div id='product-detail-outer-ctn'>
                <div id='product-detatil-top-ctn'>
                    <div id='product-detail-top-child-left'>
                        <div id='product-detail-image-ctn'>
                                {productImages.map(img => (
                                    <div id='product-single-image-ctn' key={img.id} >
                                        <img src={img.url} alt={img.id}/>
                                    </div>
                                ))}
                        </div>
                        <div id='detail-gift-ctn'>
                            <DetailsAndCare singleProduct={singleProduct}/>
                            <GiftOptions />
                        </div>
                    </div>

                    <div id='product-detail-top-child-right'>
                        { singleProduct.Reviews.length?(
                            <div id='product-detail-rating-ctn'>
                                <StarRating
                                    numberOfStars={5}
                                    rating={singleProduct.Avg_rating}
                                    starRatedColor="rgb(57, 57, 57)"
                                    starEmptyColor="rgb(227, 227, 227)"
                                    starDimension='18px'
                                    starSpacing='2px'
                                />
                            </div>
                        ):(<div></div>) }
                        <div id='product-detail-name-ctn'>
                            <p>
                                {singleProduct.name}
                            </p>
                        </div>
                        <div id='product-detail-brand-ctn'>
                            <p>
                                {singleProduct.brand}
                            </p>
                        </div>
                        <div id='product-detail-price-ctn'>
                            ${singleProduct.price}
                        </div>
                        <div>
                            <i className="fa-solid fa-truck-fast"></i> FREE SHIPPING
                        </div>
                        <div id='product-detail-about-ctn'>
                            <p>
                                {singleProduct.about}
                            </p>
                        </div>
                        <div id='product-detail-num-select-ctn'>
                            <select value={quantity} onChange={e=>setQuantity(e.target.value)} className='quantity-selected-box'>
                                {options.map(option => (
                                    <option key={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <button id="btn-add-to-cart" onClick={handleAddToCart}>
                            <div>
                                <i className="fa-solid fa-bag-shopping" id='btn-add-to-bag-bag-icon' style={{'color':'white'}}></i>
                            </div>
                            <div>Add to Bag</div>
                        </button>
                    </div>
                </div>



                <div id='product-detail-bottom-ctn'>
                    {/* <Reviews productId={productId}/> */}
                </div>
            </div>

        )

    )
}
