import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { thunkGetAllProducts } from '../../store/product';

export default function Products() {

    const dispatch = useDispatch()
    const allProductsObj = useSelector(state => state.product.allProducts)
    const allProductsArr = Object.values(allProductsObj)

    useEffect(()=> {
        dispatch(thunkGetAllProducts(allProductsArr))
    },[dispatch])

    return (
        <div>
            { allProductsArr.map(product => (
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        {product.name}
                        <img src={product.preview_image} alt={product.name} />
                    </Link>
                </div>
            )) }
        </div>
    )
}
