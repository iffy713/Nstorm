import { useState, useEffect } from "react";
import AddToCart from "./AddToCart";
import { Modal } from "../../../context/Modal";
import { thunkAddToCart, thunkGetCartItems } from "../../../store/cart";
import { thunkGetSingleProduct } from "../../../store/product";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


export default function CartModal({singleProduct, previewImg, quantity, setQuantity}) {

    const dispatch = useDispatch()
    const history = useHistory()
    const [ showModal, setShowModal ] = useState(false)
    const productId = singleProduct.id
    const user = useSelector(state=> state.session.user)

    useEffect(()=> {
        dispatch(thunkGetSingleProduct(productId))

    }, [dispatch, productId])

    const handleAddToCart = async () => {
        if(!user){
            history.push('/login')
        }
        // setShowCartModal(true)
        await dispatch(thunkAddToCart(productId,quantity))
            .then(setQuantity(1))
            .then(setShowModal(true))
        await dispatch(thunkGetCartItems())
    }

    return (
        <>
            <div id="btn-add-to-cart" onClick={handleAddToCart} style={{'width': '100%'}}>
                <div>
                    <i className="fa-solid fa-bag-shopping" id='btn-add-to-bag-bag-icon' style={{'color':'white'}}></i>
                </div>
                <div>Add to Bag</div>
            </div>

            { showModal &&  (
                <Modal onClose={()=>setShowModal(false)}>
                    <div className="modal-inner-ctn">
                        <div className="close-modal-btn-outer">
                            <div className='close-modal-btn-ctn'>
                                <button onClick={()=>setShowModal(false)}>
                                    <i className="fa-solid fa-x"></i>
                                </button>
                            </div>
                        </div>
                        {/* <div className="form-ctn"></div> */}
                            <AddToCart singleProduct={singleProduct} previewImg={previewImg} onClick={handleAddToCart}/>
                    </div>
                </Modal>
            ) }
        </>
    )
}
