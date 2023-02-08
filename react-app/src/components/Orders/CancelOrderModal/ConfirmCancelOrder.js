import { useDispatch } from "react-redux";
import { thunkCancelOrder } from "../../../store/order";



export default function ConfirmCancelOrder({order, setShowModal}){

    const dispatch = useDispatch()
    const handleDelete = ()=>{
        dispatch(thunkCancelOrder(order.id))
    }
    return (
        <div className="confirm-modal-outer">
            <div>
                <h2>
                    This order will be canceled!
                </h2>
                <p>Are you sure to proceed?</p>
            </div>
            <div className="confirm-modal-btns-ctn">
                <button className='confirm-modal-not-sure' onClick={()=>setShowModal(false)}>I am not sure</button>
                <button className='confirm-modal-btn' onClick={handleDelete}>Cancel order</button>
            </div>
        </div>
    )
}
