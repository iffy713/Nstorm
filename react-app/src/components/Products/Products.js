import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { thunkGetAllProducts } from '../../store/product';
import StarRating from 'react-star-ratings'
import './Products.css'
import EmptyUserBar from '../auth/EmptyUserBar';
import WelcomeBack from '../auth/WelcomeBack';
import Spinner from '../Spinner/Spinner';
import SingleProductCard from './SingleProductCard';

export default function Products() {

    const dispatch = useDispatch()
    const allProductsObj = useSelector(state => state.product.allProducts)
    const allProductsArr = allProductsObj ? Object.values(allProductsObj) : []
    const [ loaded, setLoaded ] = useState(false)

    const user = useSelector(state => state.session.user)

    useEffect(()=> {
        dispatch(thunkGetAllProducts(allProductsArr))
            .then(setLoaded(true))
    },[dispatch])

    if(!loaded || !allProductsArr) return (
        <div className='all-products-container'>
            <Spinner />
        </div>
    )

    return (
        <div>
            {!user?(
                <div className='empty-user-bar-ctn'>
                    <EmptyUserBar />
                </div>
            ):(<div className='empty-user-bar-ctn'>
                <WelcomeBack user={user}/>
            </div>)}
            <div className='all-products-outer'>
                <div className='all-products-container'>
                    { allProductsArr.map(product => (
                        <SingleProductCard product={product} />
                    )) }
                </div>
                {/* )} */}
            </div>
        </div>
    )
}
