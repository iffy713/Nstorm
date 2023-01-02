import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { thunkCancelOrder, thunkGetOrders, thunkDeleteOrder } from '../../store/order'
import './OrderInList.css'

export default function OrderInList({order}){

    const dispatch = useDispatch()
    const timeString = order.created_at
    const date = new Date(timeString)
    const year = date.getFullYear()
    const month = date.getMonth() +1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const newTimeString = `${month}/${day}/${year}  ${hour}:${minute}`

    // useEffect(()=> {
    //     dispatch(thunkGetOrders())
    // }, [dispatch])

    // const handleCancel = async()=>{
    //     dispatch(thunkCancelOrder(order.id))
    // }

    return (
            <div className='order-in-list'>
                <div  id='order-status' className='order-title'>
                    {order.is_canceled?<div><h5>Canceled</h5></div>:<div><h5>Purchased Online</h5></div>}
                    <div>
                        <button onClick={()=>dispatch(thunkDeleteOrder(order.id))} id="order-delete-btn">
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    {/* <button onClick={()=>dispatch(thunkDeleteOrder(order.id))}>Delete this Order</button> */}
                </div>
                <div className='order-title' >
                    <span>{newTimeString}</span>
                    {/* <span> | </span> */}
                    {/* <span>price</span> */}
                </div>
                <div>
                    <div><h5>Ship to</h5></div>
                    {order.Address && (
                        <div>{order.Address.street}, {order.Address.city}, {order.Address.state} {order.Address.zip_code}</div>
                    )}
                </div>
                <div id="order-product-imgs-outer">
                    {order.Products && (
                        <div id='order-product-imgs-ctn'>
                            {order.Products.map(product => {
                                if (!product || !product.Product) return null
                                return (
                                    <div key={product.Product.id}>
                                        <Link to={`/products/${product.Product.id}`}>
                                            <img src={product.Product.preview_image}
                                                alt={product.name}
                                                id="order-preview-img"
                                            />
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
                <div>
                    {!order.is_canceled &&
                        <button onClick={()=>dispatch(thunkCancelOrder(order.id))} id="cancel-order-btn">Cancel this order</button>}
                </div>

            </div>
    )
}
