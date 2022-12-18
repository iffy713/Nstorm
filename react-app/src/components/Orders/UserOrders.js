import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { thunkGetOrders } from "../../store/order"
import OrderInList from "./OrderInList"

export default function UserOrders() {
    const dispatch = useDispatch()
    const allOrdersObj = useSelector(state => state.orders)
    const allOrdersArr = Object.values(allOrdersObj)

    console.log(allOrdersArr)
    useEffect(()=>{
        dispatch(thunkGetOrders())
    }, [dispatch])


    return (
        <div>
            {allOrdersArr.map(order => (
                <div key={order.id}>
                    <OrderInList order={order}/>
                </div>
            ))}
        </div>
    )
}
