import { Link } from 'react-router-dom';

export default function EmptyReview() {

    return (
        <div>
            <h6>You have no reviews</h6>
            <Link className='shop-now-text' to="/">
                <button className='shop-now-btn'>
                    Shop now
                </button>
            </Link>
        </div>
    )
}
