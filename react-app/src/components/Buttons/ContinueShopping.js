import { Link } from 'react-router-dom';
import "./ContinueShopping.css"

export default function ContinueShopping() {
    return (
        <Link to="/" id='back-to-shopping'>
            <button id='btn-back-to-shopping'>
                Continue Shopping
            </button>
        </Link>
    )
}
