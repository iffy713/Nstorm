import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { thunkGetAllProducts } from '../../store/product';
import StarRating from 'react-star-ratings'
import './Products.css'
import EmptyUserBar from '../auth/EmptyUserBar';
import WelcomeBack from '../auth/WelcomeBack';

export default function Products() {

    const dispatch = useDispatch()
    const allProductsObj = useSelector(state => state.product.allProducts)
    const allProductsArr = Object.values(allProductsObj)

    const user = useSelector(state => state.session.user)

    useEffect(()=> {
        dispatch(thunkGetAllProducts(allProductsArr))
    },[dispatch])

    return (
        <div>
            {!user?(
                <div className='empty-user-bar-ctn'>
                    <EmptyUserBar />
                </div>
            ):(<div className='empty-user-bar-ctn'>
                <WelcomeBack user={user}/>
            </div>)}
            <div id='all-products-outer'>

                <div id='all-products-container'>
                    { allProductsArr.map(product => (
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
                    )) }
                </div>
            </div>
        </div>
    )
}
