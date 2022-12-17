import { Link } from 'react-router-dom';

export default function EmptyBag() {

    return (
        <div>
            <h1>Your bag is empty</h1>
            <button>
                <Link to="/">Find something new...</Link>
            </button>
        </div>
    )
}
