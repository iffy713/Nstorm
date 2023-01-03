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
                    <CreateAddressForm setShowModal={setShowModal}/>
                </Modal>
            ) }
        </>
    )
}
