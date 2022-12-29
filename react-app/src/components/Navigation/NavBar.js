
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginInDropDown from './Drop-down-menus/LogInDropDown';
import LogOutDropDown from './Drop-down-menus/LogOutDropDown';
import './NavBar.css'
import UserButton from './UserButton';

const NavBar = ({setLoaded}) => {


  const sessionUser = useSelector(state=> state.session.user)

  let sessionLink
  if(sessionUser){
    sessionLink = (
      // <LoginInDropDown user={sessionUser}/>
      // <div>Hi, {sessionUser.first_name}</div>
      <UserButton sessionUser={sessionUser}/>
    )
  } else {
    sessionLink = (
      // <LogOutDropDown />
      <div>My Account</div>
    )
  }

  return (
    <div className='nav-bar-outer'>
      <nav className='nav-bar'>
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
              <img id="logo-img" src='https://drive.google.com/uc?export=view&id=1w7TKg87_R8Pqs1NCT0_sFICPjfcUlsOX' />
          </NavLink>
        </div>
        {setLoaded && sessionLink}
        <NavLink to='/shopping-bag' exact={true} activeClassName='active' className='nav-bar-headers'>
          <i className="fa-solid fa-bag-shopping"></i>
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;

{/* <div className='nav-bar-right-ctn'>
    <div >
      <button>
        Account
      </button>
    </div>
    <div>
      <NavLink
        to='/login'
        exact={true}
        activeClassName='active'
        className='nav-bar-headers'
        onClick>
            Sign In
      </NavLink>
    </div>
    <div>
      <NavLink to='/shopping-bag' exact={true} activeClassName='active' className='nav-bar-headers'>
          <i className="fa-solid fa-bag-shopping"></i>
      </NavLink>
    </div>
</div> */}
