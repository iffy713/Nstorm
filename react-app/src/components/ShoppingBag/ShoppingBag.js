import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetCartItems, thunkRemoveCartItem } from "../../store/cart";

export default function ShoppingBag(){

    const dispatch = useDispatch()
    const cartItemsObj = useSelector(state=> state.cartItems)
    const cartItemsArr = Object.values(cartItemsObj)
    // const products = useSelector(state => state.product.allProducts)
    const [ quantity, setQuantity ] = useState()

    // set quantity selections
    let options = []
    for(let i = 1; i<=50; i++){
        options.push(i)
    }

    useEffect(()=>{
        dispatch(thunkGetCartItems())
    }, [dispatch])

    return (
        <div>
            shopping bag component
            {cartItemsArr.map(item => (
                <div key={item.id}>
                    {item.id} quantity {item.quantity}
                    <select value={item.quantity} onChange={e => setQuantity(e.target.value)}>
                    {options.map(option => (
                        <option key={option}>{option}</option>
                    ))}
                    </select>
                    <button onClick={()=>dispatch(thunkRemoveCartItem(item.id))}>Remove</button>
                </div>
            ))}
            <div>

            </div>
        </div>
    )
}
