import React, { useState } from "react";
import { Modal } from '../../context/Modal'
import CreateAddressForm from "./CreateAddressForm";
import "./CreateAddress.css"


export default function CreateAddressFormModal() {
    const [ showModal, setShowModal ] = useState(false)

    return (
        <>
            <button onClick={()=> setShowModal(true)} id="create-address-btn">Add New Address</button>
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
                            <CreateAddressForm setShowModal={setShowModal}/>
                    </div>
                </Modal>
            ) }
        </>
    )
}
