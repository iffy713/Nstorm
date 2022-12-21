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
                <article key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <img src={product.preview_image} alt={product.name}/>
                        {product.name}
                    </Link>
                </article>
            )) }
        </div>
    )
}
