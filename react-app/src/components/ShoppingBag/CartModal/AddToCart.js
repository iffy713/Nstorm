import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



export default function AddToCart({singleProduct, previewImg}){

    const cartItemsObj = useSelector(state=>state.cartItems)
    const cartItemsArr = Object.values(cartItemsObj)
    console.log("!!!!!!!!!!",cartItemsArr)

    let itemsTotal = 0
    for(let item of cartItemsArr){
        itemsTotal += item.quantity
    }



    return (
        <div>
            <div>
                <img src={previewImg}/>
            </div>
            <div>
                <h3>
                    Added to your bag
                </h3>
                <div>
                    ${singleProduct.price}
                </div>
                <div>
                    <button>
                        Checkout
                    </button>
                    <Link>
                        View Shopping Bag ({itemsTotal})
                    </Link>
                </div>

            </div>
        </div>
    )
}
