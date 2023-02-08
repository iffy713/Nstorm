import { useState } from "react";
import { Modal } from "../../../context/Modal";
import ConfirmDeleteOrder from "./ConfirmDeleteOrder";

export default function DeleteOrderModal({order}) {

    const  [ showModal, setShowModal ] = useState(false)

    return (
        <>
            <button onClick={()=>setShowModal(true)} id="order-delete-btn">
                <i className="fa-solid fa-x"></i>
            </button>
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
                        <ConfirmDeleteOrder setShowModal={setShowModal} order={order}/>
                    </div>
                </Modal>
            ) }
        </>
    )
}
