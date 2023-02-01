import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from '../../context/Modal'
import { Link, useHistory } from "react-router-dom";
import CreateReviewForm from "./CreateReviewForm";

export default function CreateReviewFormModal({productId}) {
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
            <button onClick={handleClick}>Write a Review</button>
            { showModal && (
                <Modal onClose={()=>setShowModal(false)}>
                    <CreateReviewForm setShowModal={setShowModal} productId={productId}/>
                </Modal>
            ) }
        </>
    )
}
