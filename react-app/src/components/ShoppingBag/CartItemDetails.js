import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { thunkUpdateItemQuantity } from "../../store/cart";
import './CartItemDetails.css'

export default function CartItemDetails({item}){

    const dispatch = useDispatch()
    const [ quantity, setQuantity ] = useState(item.quantity)
    const [ itemPrice, setItemPrice ] = useState(quantity * item.Product.price)
    const [ loaded, setLoaded ] = useState(false)

    useEffect(()=>{
        setLoaded(true)
        dispatch(thunkUpdateItemQuantity(item.id, quantity))
            .then(setItemPrice(quantity * item.Product.price))

    }, [dispatch, quantity])

    let options = []
    for(let i = 1; i<=50; i++){
        options.push(i)
    }

    if (!item) return null

    return (
        loaded && (
            <div id="cart-item-detail-ctn">
                <div id="cart-item-img-detail">
                    <img src={item.Product.preview_img} alt={item.Product.name} id='cart-item-preview-img' ></img>
                    <div id="cart-item-title-quantity">
                        <div>
                            {item.Product.brand}
                        </div>
                        <div>
                            {item.Product.name}
                        </div>
                        <div>
                            Qty
                            <select value={quantity} onChange={(e)=>setQuantity(e.target.value)} id='cart-item-quantity-select'>
                                {options.map(option => (
                                    <option key={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                {/* ${item.Product.price} each */}
                <div id="cart-item-product-price">
                    ${Number(itemPrice).toFixed(2)}
                    { item.quantity>1?(<span>(${item.Product.price} each)</span>):(<div></div>) }
                </div>
            </div>
        )
    )
}
