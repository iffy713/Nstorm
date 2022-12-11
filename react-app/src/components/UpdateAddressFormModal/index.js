import React, { useState } from "react";
import { Modal } from '../../context/Modal'
import UpdateAddressForm from "./UpdateAddressForm";


export default function UpdateAddressFormModal({addressId, street, city, state, zipCode, primary}) {
    const [ showModal, setShowModal ] = useState(false)

    return (
        <>
            <button onClick={()=> setShowModal(true)}>Update</button>
            { showModal && (
                <Modal onClose={()=>setShowModal(false)}>
                    <UpdateAddressForm
                        addressId={addressId}
                        street={street}
                        city={city}
                        state={state}
                        zipCode={zipCode}
                        primary={primary}
                        setShowModal={setShowModal}
                    />
                </Modal>
            )}
        </>
    )
}
