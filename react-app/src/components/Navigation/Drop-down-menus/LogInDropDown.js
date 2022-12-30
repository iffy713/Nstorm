
import { NavLink } from 'react-router-dom';
import LogoutButton from '../../auth/LogoutButton';
import './LogInDropDown.css'

export default function LoginInDropDown({user}) {

    return (
        <>
            <div className='drop-down-log-in'>
                <div className='child-drop-down'>
                    <NavLink to='/my-account' exact={true} activeClassName='active' className='nav-bar-headers'>
                       Account
                    </NavLink>
                </div>
                <div className='child-drop-down'>{"  |  "}</div>
                <div className='child-drop-down'>
                    <LogoutButton />
                </div>
            </div>

        </>
    )
}
