import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { thunkGetCartItems } from "../../store/cart"

export default function CartItemsTotal({cartItems}){

    // console.log(cartItems)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(thunkGetCartItems())
    }, [dispatch])

    let orderTotal = 0
    cartItems.forEach(item => {
        orderTotal += item.Product.price * item.quantity
    })

    return (
        <div>
            <hr></hr>
            <div>
                Subtotal {Number(orderTotal).toFixed(2)}
            </div>
            <div>
                Estimated tax {Number(orderTotal*0.07).toFixed(2)}
            </div>
            <div>
                Estimated total {Number(orderTotal*1.07).toFixed(2)}
            </div>
        </div>
    )
}
