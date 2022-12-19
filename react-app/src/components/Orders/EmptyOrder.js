import { Link } from 'react-router-dom';

export default function EmptyOrder() {

    return (
        <div>
            <h1>You don't have any orders yet</h1>
            <button>
                <Link to="/">Go Shopping</Link>
            </button>
        </div>
    )
}
