import { useState } from "react";
import { Modal } from "../../../context/Modal";
import ConfirmDeleteReview from "./ConfirmDeleteReview";

export default function DeleteReviewModal({review}){

    const [ showModal, setShowModal ] = useState(false)



    return (
        <>
            <button onClick={()=> setShowModal(true)}
                className='delete-review-btn'>
                Delete this review
            </button>
            { showModal && (
                <Modal onClose={()=>setShowModal(false)}>
                    <div className="modal-inner-ctn">
                        <div className="close-modal-btn-outer">
                            <div className='close-modal-btn-ctn'>
                                <button onClick={()=>setShowModal(false)}>
                                    <i className="fa-solid fa-x"></i>
                                </button>
                            </div>
                        </div>
                        {/* <div className="form-ctn"></div> */}
                        <ConfirmDeleteReview setShowModal={setShowModal} review={review}/>
                    </div>
                </Modal>
            ) }
        </>
    )
}
