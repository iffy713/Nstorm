import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { thunkAddToCart } from '../../store/cart';
import { thunkGetSingleProduct } from '../../store/product';
import { thunkGetProductReviews } from '../../store/review';
import Reviews from '../Reviews/Reviews';
import './ProductDetails.css'

export default function ProductDetails() {

    const dispatch = useDispatch()
    const singleProduct = useSelector(state => state.product.singleProduct)

    const cartItemsObj = useSelector(state => state.cartItems)
    const cartItemsArr = Object.values(cartItemsObj)

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
        dispatch(thunkGetProductReviews(productId))
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
                        <div>
                            {productImages.map(img => (
                                <img key={img.id} src={img.url} alt={img.id}/>
                            ))}
                        </div>
                    </div>
                    <div id='product-detail-top-child-right'>
                        <div>
                            {singleProduct.name}
                            {singleProduct.brand}
                            {singleProduct.brand_story}
                            {singleProduct.price}
                        </div>
                        <div>
                            <select value={quantity} onChange={e=>setQuantity(e.target.value)}>
                                {options.map(option => (
                                    <option key={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <button id="btn-add-to-cart" onClick={handleAddToCart}>Add to cart</button>
                    </div>
                </div>

                <div id='product-detail-bottom-ctn'>
                    <Reviews productId={productId}/>
                </div>
            </div>

        )

    )
}
