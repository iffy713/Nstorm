import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetCartItems, thunkRemoveCartItem, thunkUpdateItemQuantity } from "../../store/cart";
import CartItemDetails from "./CartItemDetails";
import CartItemsTotal from "./CartItemsTotal";

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
        loaded && (
            <div>
                shopping bag component

                {cartItemsArr.map(item => {
                    if (!item || !item.Product) return null
                    return (
                        <div key={item.id}>
                            <CartItemDetails item={item}/>
                            <button onClick={()=>dispatch(thunkRemoveCartItem(item.id))}>Remove</button>
                        </div>
                    )
                })}
                {/* {cartItemsArr.map(item => (
                    // if(!item) return null
                    <div key={item.id}>
                        <CartItemDetails item={item}/>
                        <button onClick={()=>dispatch(thunkRemoveCartItem(item.id))}>Remove</button>
                    </div>
                ))} */}

                
                <div>
                    <CartItemsTotal cartItems={cartItemsArr}/>
                </div>
            </div>
        )
    )
}
