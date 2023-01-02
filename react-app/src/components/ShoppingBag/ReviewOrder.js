import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { thunkGetAllAddresses } from "../../store/address";
import { thunkGetCartItems } from "../../store/cart";
import { thunkCreateOrder } from "../../store/order";

export default function ReviewOrder(){

    const dispatch = useDispatch()
    const history = useHistory()
    const cartItemsObj = useSelector(state=> state.cartItems)
    const cartItemsArr = Object.values(cartItemsObj)
    const [ addressId, setAddressId ] = useState()


    // console.log(cartItemsArr)
    let orderTotal = 0
    cartItemsArr.forEach(item => {
        orderTotal += item.Product.price * item.quantity
    })
    const userAddressObj = useSelector(state => state.addresses)
    const userAddressArr = Object.values(userAddressObj)
    // const addressId = userAddressArr[0].id
    const userId = useSelector(state => state.session.user).id

    const updateAddress = (e)=> {
        setAddressId(e.target.value)
    }


    const handleSubmit = async(e) => {
        const data = await dispatch(thunkCreateOrder(userId, addressId))
        history.push('/my-account')
    }

    useEffect(()=> {
        dispatch(thunkGetAllAddresses())
        dispatch(thunkGetCartItems())
    }, [dispatch])

    if(!userAddressArr.length) return null

    return (
        <div>
            <div>
                <div>
                    <div>Checkout</div>
                    <div><Link to='/shopping-bag'>Edit Shopping Bag</Link></div>
                </div>
                <div>
                    <div>Shipping address</div>
                    <form>
                        {userAddressArr.map(address => (
                            <div key={address.id}>
                                <input name="address-radio" type='radio' value={address.id} onChange={updateAddress}/>
                                <label htmlFor="address-radio">{address.street}, {address.city}, {address.state}</label>
                            </div>
                        ))}
                    </form>
                </div>
            </div>
            <div>
                <div>Order Summary</div>
                <div>
                    <div>Your items   {Number(orderTotal).toFixed(2)}</div>
                    <div>Shipping  Free</div>
                    <div>Estimated tax {Number(orderTotal*0.07).toFixed(2)}</div>
                    <div>Estimated total {Number(orderTotal * 1.07).toFixed(2)}</div>
                    <button onClick={handleSubmit}>Place Order</button>
                </div>
            </div>
        </div>
    )
}
