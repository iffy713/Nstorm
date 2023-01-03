import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { thunkGetAllProducts } from '../../store/product';
import './Products.css'

export default function Products() {

    const dispatch = useDispatch()
    const allProductsObj = useSelector(state => state.product.allProducts)
    const allProductsArr = Object.values(allProductsObj)

    useEffect(()=> {
        dispatch(thunkGetAllProducts(allProductsArr))
    },[dispatch])

    return (
        <div id='all-products-container'>
            { allProductsArr.map(product => (
                <article key={product.id} className="single-product-card-ctn">
                    <Link to={`/products/${product.id}`} className="product-card">
                        <img src={product.preview_image} alt={product.name}/>
                        <div id="single-card-product-name">
                            {product.name}
                        </div>
                    </Link>
                    <div id="single-card-product-price">${product.price}</div>
                </article>
            )) }
        </div>
    )
}
