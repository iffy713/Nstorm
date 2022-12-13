import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { thunkUpdateItemQuantity } from "../../store/cart";

export default function CartItemDetails({item}){

    const dispatch = useDispatch()
    const [ loaded, setLoaded ] = useState(false)
    const [ quantity, setQuantity ] = useState(item.quantity)
    const [ itemPrice, setItemPrice ] = useState(quantity * item.Product.price)


    useEffect(()=>{
        setLoaded(true)
        dispatch(thunkUpdateItemQuantity(item.id, quantity))
            .then(setItemPrice(quantity * item.Product.price))

    }, [dispatch, quantity])

    let options = []
    for(let i = 1; i<=50; i++){
        options.push(i)
    }

    return (
        loaded && (
            <div>
                Cart item details
                <br></br>
                {item.Product.name} quantity {item.quantity}
                <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                    {options.map(option => (
                        <option>{option}</option>
                    ))}
                </select>
                ${item.Product.price}
                total ${itemPrice}
            </div>
        )
    )
}
