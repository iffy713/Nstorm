import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import SignUpForm from "./SignUpForm";
import './SignUpForm.css'

export default function SignUpFormModal() {
    const [ showModal, setShowModal ] = useState(false)

    return (
        <>
            <button onClick={()=> setShowModal(true)} className="products-page-login-signup-btn">Create an Account</button>
            { showModal && (
                <Modal onClose={()=>setShowModal(false)} >
                    <div className="modal-inner-ctn">
                        <div className="close-modal-btn-outer">
                            <div className='close-modal-btn-ctn'>
                                <button onClick={()=>setShowModal(false)}>
                                    <i className="fa-solid fa-x"></i>
                                </button>
                            </div>
                        </div>
                        <div className="form-ctn">
                            <SignUpForm setShowModal={setShowModal}/>
                        </div>
                    </div>
                </Modal>
            ) }
        </>
    )
}
