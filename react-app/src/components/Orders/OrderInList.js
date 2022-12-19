import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { thunkCancelOrder, thunkGetOrders } from '../../store/order'
import './OrderInList.css'

export default function OrderInList({order}){

    const dispatch = useDispatch()
    const timeString = order.created_at
    const date = new Date(timeString)
    const year = date.getFullYear()
    const month = date.getMonth() +1
    const day = date.getDate()
    const newTimeString = `${month}/${day}/${year}`


    // useEffect(()=> {
    //     dispatch(thunkGetOrders())
    // }, [dispatch])

    const handleCancel = async()=>{
        dispatch(thunkCancelOrder(order.id)).then(dispatch(thunkGetOrders()))
    }

    return (
        <div>
            <hr></hr>
            <div>
                {order.is_canceled?<div>Canceled</div>:<div>Purchased Online</div>}
            </div>
            <div>
                <span>{newTimeString} | </span>
                <span>price</span>
            </div>
            <div>
                <div>Ship to</div>
                <div>{order.Address.street}</div>
            </div>
            <div>
                {order.Products.map(product => (
                    <img key={product.Product.id}
                        src={product.Product.preview_image}
                        alt={product.name}
                        id="order-preview-img"
                    />
                ))}
            </div>
            <div>
                {!order.is_canceled &&
                    // <button onClick={()=>dispatch(thunkCancelOrder(order.id))}>Cancel</button>}
                    <button onClick={handleCancel}>Cancel</button>}

            </div>

        </div>
    )
}
