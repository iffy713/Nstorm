import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import LoginForm from "./LoginForm";
import './LoginForm.css'

export default function LoginFormModal() {
    const [ showModal, setShowModal ] = useState(false)

    return (
        <>
            <button onClick={()=> setShowModal(true)} id="products-page-login-btn">Sign In</button>
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
                            <LoginForm setShowModal={setShowModal}/>
                        </div>
                    </div>
                </Modal>
            ) }
        </>
    )
}
