import { NavLink } from 'react-router-dom';
import './LogOutDropDown.css'

export default function LogOutDropDown() {
    return (
        <div className='drop-down-log-out'>
            <div className='child-drop-down'>
                <NavLink to='/login' exact={true} activeClassName='active' className='drop-down-headers'>
                    Sign In
                </NavLink>
            </div>
            <div className='child-drop-down'>{"  |  "}</div>
            <div className='child-drop-down'>
                <NavLink to='/sign-up' exact={true} activeClassName='active' className='drop-down-headers'>
                    Create Account
                </NavLink>
            </div>
        </div>
    )
}
