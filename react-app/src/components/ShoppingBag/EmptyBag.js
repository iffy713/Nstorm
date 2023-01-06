import { Link } from 'react-router-dom';
import './EmptyBag.css'

export default function EmptyBag() {

    return (
        <div id='empty-bag-page-outer'>
            <div>Your bag is empty</div>
            <Link to="/" id='back-to-shopping'>
                <button id='btn-back-to-shopping'>
                    Continue Shopping
                </button>
            </Link>
        </div>
    )
}
