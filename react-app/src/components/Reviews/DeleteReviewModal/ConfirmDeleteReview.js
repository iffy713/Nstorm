import { useDispatch } from "react-redux"
import { thunkDeleteReview } from "../../../store/review"
import "./ConfirmDeleteReview.css"

export default function ConfirmDeleteReview({setShowModal, review}){

    const dispatch = useDispatch()

    const handleDelete = () =>{
        dispatch(thunkDeleteReview(review.id)).then(setShowModal(false))
    }
    return (
        <div className="confirm-modal-outer">
            <div>
                <h2>
                    this review will be deleted permanently!
                </h2>
                <p>Are you sure to proceed?</p>
            </div>
            <div className="confirm-modal-btns-ctn">
                <button className='confirm-modal-not-sure' onClick={()=>setShowModal(false)}>I am not sure</button>
                <button className='confirm-modal-btn' onClick={handleDelete}>Delete my review</button>
            </div>
        </div>
    )
}
