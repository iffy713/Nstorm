import React, { useEffect, useState } from "react";



export default function CartItemDetails({item}){

    console.log(item)
    // const productObj = useState(state => state.product.singleProduct)

    return (
        <div>
            Cart item details
            <br></br>
            {item.id} quantity {item.quantity}

        </div>
    )
}
