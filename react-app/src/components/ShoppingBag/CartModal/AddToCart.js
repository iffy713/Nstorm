import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './AddToCart.css'



export default function AddToCart({singleProduct, previewImg}){

    const cartItemsObj = useSelector(state=>state.cartItems)
    const cartItemsArr = Object.values(cartItemsObj)
    console.log("!!!!!!!!!!",cartItemsArr)

    let itemsTotal = 0
    for(let item of cartItemsArr){
        itemsTotal += item.quantity
    }



    return (
        <div id='cart-modal-ctn'>
            <div>
                <img src={previewImg} alt={previewImg} id='img-cart-modal'/>
            </div>
            <div className='cart-modal-child'>
                <h3>
                    Added to your bag
                </h3>
                <div id='cart-modal-price'>
                    <h5>
                        ${singleProduct.price}
                    </h5>
                </div>
                <div id='cart-modal-btn-ctn'>
                    <Link to='/checkout' style={{'textDecoration':'none'}}>
                        <button id='btn-cart-modal'>
                            Checkout
                        </button>
                    </Link>
                    <Link to='/shopping-bag' style={{'color':'black', 'marginTop':'20px'}}>
                        View Shopping Bag ({itemsTotal})
                    </Link>
                </div>

            </div>
        </div>
    )
}
