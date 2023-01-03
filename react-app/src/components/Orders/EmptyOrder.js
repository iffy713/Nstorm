import { Link } from 'react-router-dom';
import "./EmptyOrder.css"

export default function EmptyOrder() {

    return (
        <div>
            <h6>You have no purchases</h6>
                <Link id='shop-now-text' to="/">
                    <button id='shop-now-btn'>
                        Shop now
                    </button>
                </Link>
        </div>
    )
}
