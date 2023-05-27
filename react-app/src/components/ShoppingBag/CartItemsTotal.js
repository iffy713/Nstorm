import React from "react"
import { Link } from 'react-router-dom';
import './CartItemsTotal.css'

export default function CartItemsTotal({cartItems}){

    let orderTotal = 0
    cartItems.forEach(item => {
        if (!item.Product || !item.Product.price) return

        orderTotal += item.Product.price * item.quantity
    })

    return (
        <div id="cart-items-total-outer-ctn">
            <div>
                <div className="subtotal-tax-ctn">
                    <div>
                        Subtotal
                    </div>
                    <div>
                        ${Number(orderTotal).toFixed(2)}
                    </div>
                </div>
                <div className="subtotal-tax-ctn">
                    <div>Shipping</div>
                    <div>Free</div>
                </div>
                <div className="subtotal-tax-ctn">
                    <div>
                        Estimated tax
                    </div>
                    <div>
                        ${Number(orderTotal*0.07).toFixed(2)}
                    </div>
                </div>
            </div>
            <div id="estimated-total-ctn" className="subtotal-tax-ctn">
                <div>
                    Estimated total
                </div>
                <div>
                    ${Number(orderTotal*1.07).toFixed(2)}
                </div>
            </div>
            <div id="btn-checkout-ctn">
                <Link to="/checkout" id="test">
                    <button id='btn-checkout'>
                        Checkout
                    </button>
                </Link>
            </div>
        </div>
    )
}
