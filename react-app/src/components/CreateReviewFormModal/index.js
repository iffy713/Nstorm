import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from '../../context/Modal'
import { Link, useHistory } from "react-router-dom";
import CreateReviewForm from "./CreateReviewForm";
import "./CreateReview.css"

export default function CreateReviewFormModal({product, productId}) {
    const [ showModal, setShowModal ] = useState(false)
    const currUser = useSelector(state => state.session.user)
    const history = useHistory()

    const handleClick = () => {
        if(!currUser){
            history.push('/login')
        }
        else{
            setShowModal(true)
        }
    }

    return (
        <>
            <button onClick={handleClick} id="create-review-btn">Write a Review</button>
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
                            <img src={product.ProductImages[0].url} style={{"weight":"300px", "height":"450px"}}/>
                            <div className="form-ctn" id="modal-review-form-ctn">
                                <CreateReviewForm setShowModal={setShowModal} productId={productId} product={product}/>
                            </div>
                        </div>
                    </div>
                </Modal>
            ) }
        </>
    )
}
