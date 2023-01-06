import React, { useState } from "react";
import { Modal } from '../../context/Modal'
import UpdateAddressForm from "./UpdateAddressForm";
import "./UpdateAddress.css"


export default function UpdateAddressFormModal({addressId, street, city, state, zipCode, primary}) {
    const [ showModal, setShowModal ] = useState(false)

    return (
        <>
            <button className="address-edit-delete-btn" onClick={()=> setShowModal(true)}>Edit</button>
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
                        <div className="form-ctn"></div>
                            <UpdateAddressForm
                                addressId={addressId}
                                street={street}
                                city={city}
                                state={state}
                                zipCode={zipCode}
                                primary={primary}
                                setShowModal={setShowModal}
                            />
                    </div>
                </Modal>
            )}
        </>
    )
}
