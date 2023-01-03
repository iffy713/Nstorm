import { Link } from 'react-router-dom';
import "./EmptyOrder.css"

export default function EmptyOrder() {

    return (
        <div>
            <h6>You have no purchases</h6>
                <Link className='shop-now-text' to="/">
                    <button className='shop-now-btn'>
                        Shop now
                    </button>
                </Link>
        </div>
    )
}
