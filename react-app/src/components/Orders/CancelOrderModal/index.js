import { useState } from "react";
import { Modal } from "../../../context/Modal";
import ConfirmCancelOrder from "./ConfirmCancelOrder";

export default function CancelOrderModal({order}) {

    const  [ showModal, setShowModal ] = useState(false)

    return (
        <>
            <button onClick={()=>setShowModal(true)} id="cancel-order-btn">
                Cancel this order
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
                        <ConfirmCancelOrder setShowModal={setShowModal} order={order}/>
                    </div>
                </Modal>
            ) }
        </>
    )
}
