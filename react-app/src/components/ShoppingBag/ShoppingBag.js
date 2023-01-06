import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetCartItems, thunkRemoveCartItem, thunkUpdateItemQuantity } from "../../store/cart";
import CartItemDetails from "./CartItemDetails";
import CartItemsTotal from "./CartItemsTotal";
import EmptyBag from "./EmptyBag";
import './ShoppingBag.css'

export default function ShoppingBag(){

    const dispatch = useDispatch()
    const cartItemsObj = useSelector(state=> state.cartItems)
    const cartItemsArr = Object.values(cartItemsObj)
    const [ loaded, setLoaded ] = useState(false)

    // set quantity selections
    let options = []
    for(let i = 1; i<=50; i++){
        options.push(i)
    }

    useEffect(()=>{
        dispatch(thunkGetCartItems()).then(setLoaded(true))
    }, [dispatch])

    return (
        loaded && cartItemsArr.length === 0?(
            <div id="empty-bag-page-ctn"><EmptyBag /></div>
        ):(
            <div id="shopping-bag-ctn">
                <div>
                    <h2>
                        Shopping Bag
                    </h2>
                </div>
                {cartItemsArr.map(item => {
                    if (!item || !item.Product) return null
                    return (
                        <div key={item.id} className='single-cart-item-ctn'>
                            <CartItemDetails item={item}/>
                            <button onClick={()=>dispatch(thunkRemoveCartItem(item.id))}
                                id='btn-remove-cart-item'
                            >Remove</button>
                        </div>
                    )
                })}
                <div id="cart-items-total-ctn">
                    <CartItemsTotal cartItems={cartItemsArr}/>
                </div>
            </div>
        )
    )
}
