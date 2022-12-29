
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../../auth/LogoutButton';
import './LogInDropDown.css'

export default function LoginInDropDown({user}) {


    console.log("getting user",user)

    return (
        <div className='drop-down-log-in'>
            <div>
                <NavLink to='/my-account' exact={true} activeClassName='active' className='nav-bar-headers'>
                    Account
                </NavLink>
            </div>
            <div>
                <LogoutButton />
            </div>
        </div>
    )
}
