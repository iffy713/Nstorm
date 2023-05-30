import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { thunkGetAllAddresses } from "../../store/address";
import { thunkGetCartItems } from "../../store/cart";
import { thunkCreateOrder } from "../../store/order";
import CreateAddressFormModal from "../CreateAddressFormModal";
import './ReviewOrder.css'

export default function ReviewOrder(){

    const dispatch = useDispatch()
    const history = useHistory()
    const cartItemsObj = useSelector(state=> state.cartItems)
    const cartItemsArr = Object.values(cartItemsObj)
    const [ addressId, setAddressId ] = useState()
    const [ errors, setErrors ] = useState([])

    let orderTotal = 0
    cartItemsArr.forEach(item => {
        orderTotal += item.Product.price * item.quantity
    })
    const userAddressObj = useSelector(state => state.addresses)
    const userAddressArr = Object.values(userAddressObj)

    const userId = useSelector(state => state.session.user).id

    const updateAddress = (e)=> {
        setAddressId(e.target.value)
    }


    const handleSubmit = async(e) => {
        const data = await dispatch(thunkCreateOrder(userId, addressId))
        if(data){
            setErrors(data)
        } else {
            history.push('/my-account')
        }
    }
    useEffect(()=> {
        dispatch(thunkGetAllAddresses())
        dispatch(thunkGetCartItems())
    }, [dispatch])

    // if(!userAddressArr.length) return null

    return (
        <div id="checkout-outer-ctn">
            <div id="checkout-inner-ctn" className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="checkout-page-card-ctn checkout-left">
                        <div className="order-summary-title">Checkout</div>
                        <div><Link to='/shopping-bag'>Edit Shopping Bag</Link></div>
                        <div id='checkout-items-img-preview-ctn'>
                            { cartItemsArr.map(item => (
                                <img src={item.Product.preview_img} key={item.id}></img>
                            )) }
                        </div>
                    </div>
                    <div className="checkout-page-card-ctn checkout-left" >
                        { !userAddressArr.length?(
                            <div className="checkout-page-card-ctn">
                                <div className="order-summary-title">Do not have a shipping address?</div>
                                <CreateAddressFormModal />
                            </div>
                        ) : (
                            <div className="checkout-page-card-ctn" id="checkout-address-select-ctn">
                                <div className="order-summary-title">Shipping address</div>
                                    <div className="order-summary-subtitle">Select an existing address below:</div>
                                    <form>
                                        {userAddressArr.map(address => (
                                            <div key={address.id} id='checkout-address-selections-ctn'>
                                                <input name="address-radio" type='radio' value={address.id} onChange={updateAddress} required/>                                            <label htmlFor="address-radio">{address.street}, {address.city}, {address.state}</label>
                                            </div>
                                        ))}
                                    </form>
                                    <div className="order-summary-subtitle">or <span><CreateAddressFormModal /></span></div>
                            </div>
                        )}
                    </div>

                </div>

                <div className="checkout-page-card-ctn checkout-right col-lg-6 col-md-6 col-sm-12">
                    <div className="checkout-right-inner">
                        <div className="order-summary-title">Order Summary</div>
                        <div className="order-summary-sub-lines">
                            <div>
                                Your items
                            </div>
                            <div>
                                ${Number(orderTotal).toFixed(2)}
                            </div>
                        </div>
                        <div className="order-summary-sub-lines">
                            <div>
                                Shipping
                            </div>
                            <div>
                                Free
                            </div>
                        </div>
                        <div className="order-summary-sub-lines">
                            <div>
                                Estimated tax
                            </div>
                            <div>
                                ${Number(orderTotal*0.07).toFixed(2)}
                            </div>
                        </div>
                        <div className="order-summary-sub-lines">
                            <div>
                                Estimated total
                            </div>
                            <div>
                                ${Number(orderTotal * 1.07).toFixed(2)}
                            </div>
                        </div>
                        <div id="checkout-place-order-btn-ctn">
                            { addressId?(
                                <button onClick={handleSubmit} id="checkout-place-order-btn">Place Order</button>
                            ): (
                                <button disabled id="checkout-place-order-btn-disabled">Place Order (Address required)</button>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
                {/* <div id="checkout-inner-left-child">
                    <div id="checkout-inner-left-top">
                        <div className="checkout-page-card-ctn">
                            <div className="order-summary-title">Checkout</div>
                            <div><Link to='/shopping-bag'>Edit Shopping Bag</Link></div>
                        </div>
                            { cartItemsArr.map(item => (
                            <img src={item.Product.preview_img}></img>
                            )) }
                    </div>
                </div>

                    <div id="checkout-inner-left-bottom" className="checkout-page-card-ctn">
                        <div>
                            <div className="order-summary-title">Shipping address</div>
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

                </div> */}


                {/* <div id="checkout-inner-right-child" className="checkout-page-card-ctn">
                    <div className="order-summary-title">Order Summary</div>
                    <div className="order-summary-sub-lines">
                        <div>
                            Your items
                        </div>
                        <div>
                            ${Number(orderTotal).toFixed(2)}
                        </div>
                    </div>
                    <div className="order-summary-sub-lines">
                        <div>
                            Shipping
                        </div>
                        <div>
                            Free
                        </div>
                    </div>
                    <div className="order-summary-sub-lines">
                        <div>
                            Estimated tax
                        </div>
                        <div>
                            ${Number(orderTotal*0.07).toFixed(2)}
                        </div>
                    </div>
                    <div className="order-summary-sub-lines">
                        <div>
                            Estimated total
                        </div>
                        <div>
                            ${Number(orderTotal * 1.07).toFixed(2)}
                        </div>
                    </div>
                    <div id="checkout-place-order-btn-ctn">
                        <button onClick={handleSubmit} id="checkout-place-order-btn">Place Order</button>
                    </div>
                </div> */}
