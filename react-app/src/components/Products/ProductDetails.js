import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { thunkAddToCart } from '../../store/cart';
import { thunkGetSingleProduct } from '../../store/product';

export default function ProductDetails() {

    console.log("CAN YOU SEE ME")
    const dispatch = useDispatch()
    const singleProduct = useSelector(state => state.product.singleProduct)

    const cartItemsObj = useSelector(state => state.cartItems)
    console.log("all cart items here", cartItemsObj)
    const cartItemsArr = Object.values(cartItemsObj)
    console.log("all cart items array is here", cartItemsArr)

    const { productId } = useParams()
    const [ quantity, setQuantity ] = useState(1)
    const [ loaded, setLoaded ] = useState(false)
    let productImages

    // set quantity selections
    let options = []
    for(let i = 1; i<=50; i++){
        options.push(i)
    }

    useEffect(()=> {
        dispatch(thunkGetSingleProduct(productId))
            .then(()=> setLoaded(true))
    }, [dispatch])

    if (loaded) {
        productImages = Object.values(singleProduct.ProductImages)
    }

    const handleAddToCart = async () => {
        
        await dispatch(thunkAddToCart(productId,quantity))
            .then(setQuantity(1))
    }



    return (
        loaded && (
            <div>
                {singleProduct.name}
                {singleProduct.brand}
                {singleProduct.brand_story}
                {singleProduct.price}
                {productImages.map(img => (
                    <img key={img.id} src={img.url} alt={img.id}/>
                ))}
                <div>
                    <select value={quantity} onChange={e=>setQuantity(e.target.value)}>
                        {options.map(option => (
                            <option key={option}>{option}</option>
                        ))}
                    </select>
                </div>
                {/* {cartItemsArr.map(item => (
                    item.product_id == productId?<button>In Your Bag</button>:
                ))} */}
                <button id="btn-add-to-cart" onClick={handleAddToCart}>Add to cart</button>
            </div>

        )

    )
}
