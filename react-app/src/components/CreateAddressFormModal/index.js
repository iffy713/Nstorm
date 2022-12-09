import React, { useState } from "react";
import { Modal } from '../../context/Modal'
import CreateAddressForm from "./CreateAddressForm";


export default function CreateAddressFormModal() {
    const [ showModal, setShowModal ] = useState(false)

    return (
        <>
            <button onClick={()=> setShowModal(true)}>Create New Address</button>
            { showModal && (
                <Modal onClose={()=>setShowModal(false)}>
                    <CreateAddressForm />
                </Modal>
            ) }
        </>
    )
}
