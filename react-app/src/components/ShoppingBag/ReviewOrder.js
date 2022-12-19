import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { thunkGetAllAddresses } from "../../store/address";
import { thunkGetCartItems } from "../../store/cart";
import { thunkCreateOrder } from "../../store/order";

export default function ReviewOrder(){

    const dispatch = useDispatch()
    const cartItemsObj = useSelector(state=> state.cartItems)
    const cartItemsArr = Object.values(cartItemsObj)
    console.log(cartItemsArr)
    let orderTotal = 0
    cartItemsArr.forEach(item => {
        orderTotal += item.Product.price * item.quantity
    })
    const userAddressObj = useSelector(state => state.addresses)
    const userAddressArr = Object.values(userAddressObj)
    // const addressId = userAddressArr[0].id
    const userId = useSelector(state => state.session.user).id


    const handleSubmit = async(e) => {
        const data = await dispatch(thunkCreateOrder(userId, addressId))
    }

    useEffect(()=> {
        dispatch(thunkGetAllAddresses())
        dispatch(thunkGetCartItems())
    }, [dispatch])

    if(!userAddressArr.length) return null
    const addressId = userAddressArr[0].id
    return (
        <div>
            <div>
                <div>
                    <div>Checkout</div>
                    <div><Link to='/shopping-bag'>Edit Shopping Bag</Link></div>
                </div>
                <div>
                    <div>Shipping address</div>
                    <div>{userAddressArr[0].street}</div>
                    <div>{userAddressArr[0].city}, {userAddressArr[0].state} {userAddressArr[0].zip_code}</div>
                </div>
            </div>
            <div>
                <div>Order Summary</div>
                <div>
                    <div>Your items   {Number(orderTotal).toFixed(2)}</div>
                    <div>Shipping  Free</div>
                    <div>Estimated tax {Number(orderTotal*1.07).toFixed(2)}</div>
                    <button onClick={handleSubmit}>Place Order</button>
                </div>
            </div>
        </div>
    )
}
