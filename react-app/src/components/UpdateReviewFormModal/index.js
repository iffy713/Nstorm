import React, { useState } from "react";
import { Modal } from '../../context/Modal'
import UpdateReviewForm from "./UpdateReviewForm";
import "./UpdateReview.css"


export default function UpdateReviewFormModal({review,product}) {
    const [ showModal, setShowModal ] = useState(false)

    return (
        <>
            <button onClick={()=> setShowModal(true)} className='delete-review-btn'>Edit this review</button>
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
                        <div id="create-review-modal-content-ctn">
                            <img src={product.preview_image} style={{"weight":"300px", "height":"450px"}}/>
                            <div className="form-ctn" id="modal-review-form-ctn">
                                <UpdateReviewForm review={review} setShowModal={setShowModal}/>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}
