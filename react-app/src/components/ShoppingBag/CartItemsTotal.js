import React from "react"

export default function CartItemsTotal({cartItems}){

    console.log(cartItems)

    let orderTotal = 0
    cartItems.forEach(item => {
        if (!item.Product || !item.Product.price) return

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
