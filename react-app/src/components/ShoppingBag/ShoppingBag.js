import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetCartItems } from "../../store/cart";

export default function ShoppingBag(){

    const dispatch = useDispatch()
    const cartItems = useSelector(state=> state.cartItems)

    useEffect(()=>{
        dispatch(thunkGetCartItems())
    })

    return (
        <div>
            Shopping bag component
        </div>
    )
}
