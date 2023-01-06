import { Link } from 'react-router-dom';
import './WelcomeBack.css'

export default function WelcomeBack({user}) {
    return (
        <div className="empty-user-outer">
            <h3>
                Welcome back, <span>{user.first_name}!</span>
            </h3>
            <Link to={'/my-account'} className='link-to-other-page'>
                View Your Nstorm Account
            </Link>
        </div>
    )
}
