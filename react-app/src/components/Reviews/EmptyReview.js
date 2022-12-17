import { Link } from 'react-router-dom';

export default function EmptyReview() {

    return (
        <div>
            <h1>You don't have any reviews yet</h1>
            <button>
                <Link to="/">Continue Shopping</Link>
            </button>
        </div>
    )
}
