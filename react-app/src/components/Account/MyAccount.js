import { NavLink } from 'react-router-dom';
import UserOrders from '../Orders/UserOrders';
import UserReviews from '../Reviews/UserReviews';
import './MyAccount.css'

export default function MyAccount() {
    return (
        <div>
            <nav className="my-account-side-bar">
                <ul>
                    <li>
                        <NavLink to='/my-account/address-book' exact={true} activeClassName='active'>
                            Shipping Addresses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/my-account/my-reviews' exact={true} activeClassName='active'>
                            My Reviews
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/my-account/my-orders' exact={true} activeClassName='active'>
                            My Orders
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div>

            </div>
        </div>
    )
}
