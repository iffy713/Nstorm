import { Link } from 'react-router-dom';
import './EmptyBag.css'
import ContinueShopping from '../Buttons/ContinueShoppint';

export default function EmptyBag() {

    return (
        <div id='empty-bag-page-outer'>
            <div>Your bag is empty</div>
            <ContinueShopping />
        </div>
    )
}
