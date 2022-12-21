import React, { useState } from "react";
import { Modal } from '../../context/Modal'
import CreateReviewForm from "./CreateReviewForm";

export default function CreateReviewFormModal({productId}) {
    const [ showModal, setShowModal ] = useState(false)

    return (
        <>
            <button onClick={()=> setShowModal(true)}>Write a Review</button>
            { showModal && (
                <Modal onClose={()=>setShowModal(false)}>
                    <CreateReviewForm setShowModal={setShowModal} productId={productId}/>
                </Modal>
            ) }
        </>
    )
}
