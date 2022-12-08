import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { thunkGetSingleProduct } from '../../store/product';

export default function ProductDetails() {

    console.log("CAN YOU SEE ME")
    const dispatch = useDispatch()
    const singleProduct = useSelector(state => state.product.singleProduct)
    console.log(singleProduct)
    const { productId } = useParams()
    const [ loaded, setLoaded ] = useState(false)
    let productImages


    useEffect(()=> {
        dispatch(thunkGetSingleProduct(productId))
            .then(()=> setLoaded(true))
    }, [dispatch])

    if (loaded) {
        productImages = Object.values(singleProduct.ProductImages)
    }
    console.log(productImages)


    return (
        loaded && (
            <div>
                {singleProduct.name}
                {singleProduct.brand}
                {singleProduct.brand_story}
                {singleProduct.price}
                {productImages.map(img => (
                    <div>{img.url}</div>
                ))}
                <button>Add to cart</button>
            </div>

        )

    )
}
