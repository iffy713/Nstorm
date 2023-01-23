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
import CartModal from '../ShoppingBag/CartModal';
import Spinner from '../Spinner/Spinner';

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
            .then(setLoaded(true))
    }, [dispatch, productId])

    // if(!loaded ) return (
    //     <div className='product-page-spinner-container'>
    //         <Spinner />
    //     </div>
    // )

    if (!loaded || !singleProduct || !singleProduct.ProductImages) return (
        <div className='product-detail-outer-ctn'>
            <Spinner />
        </div>
    )
    const productImages = Object.values(singleProduct.ProductImages)
    // if (! loaded) return <Spinner />

    return (
        loaded && (
            <div className='product-detail-outer-ctn'>
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
                        <CartModal
                            singleProduct={singleProduct}
                            quantity={quantity}
                            setQuantity={setQuantity}
                            previewImg={singleProduct.ProductImages[0].url}
                        />
                    </div>
                </div>



                <div id='product-detail-bottom-ctn'>
                    <Reviews productId={productId}/>
                </div>
            </div>

        )

    )
}
