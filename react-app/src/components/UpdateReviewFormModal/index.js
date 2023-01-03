import React, { useState } from "react";
import { Modal } from '../../context/Modal'
import UpdateReviewForm from "./UpdateReviewForm";
import "./UpdateReview.css"


export default function UpdateReviewFormModal({review}) {
    const [ showModal, setShowModal ] = useState(false)

    return (
        <>
            <button onClick={()=> setShowModal(true)}>Edit</button>
            { showModal && (
                <Modal onClose={()=>setShowModal(false)}>
                    <UpdateReviewForm review={review} setShowModal={setShowModal}/>
                    {/* <UpdateAddressForm
                        addressId={addressId}
                        street={street}
                        city={city}
                        state={state}
                        zipCode={zipCode}
                        primary={primary}
                        setShowModal={setShowModal}
                    /> */}
                </Modal>
            )}
        </>
    )
}
