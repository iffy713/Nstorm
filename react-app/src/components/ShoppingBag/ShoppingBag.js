import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetCartItems } from "../../store/cart";

export default function ShoppingBag(){

    const dispatch = useDispatch()
    const cartItemsObj = useSelector(state=> state.cartItems)
    const cartItemsArr = Object.values(cartItemsObj)
    const products = useSelector(state => state.product.allProducts)

    useEffect(()=>{
        dispatch(thunkGetCartItems())
    }, [dispatch])

    return (
        <div>
            shopping bag component
            {cartItemsArr.map(item => (
                <div key={item.id}>{item.id} quantity {item.quantity}</div>
            ))}
        </div>
    )
}
