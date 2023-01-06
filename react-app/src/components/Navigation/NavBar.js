
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import AccoutButton from './AccountButton';
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
      <AccoutButton />
    )
  }

  return (
    <div className='nav-bar-outer'>
      <nav className='nav-bar'>
        <div id="nav-bar-child-left">
          <NavLink to='/' exact={true} activeClassName='active'>
              <img id="logo-img" src='https://drive.google.com/uc?export=view&id=1q8uKj7aY-vdBGj_cPd0lty-fyXCGCMwF' />
          </NavLink>
        </div>
        <div id="nav-bar-child-right">
          <div>
            {setLoaded && sessionLink}
          </div>
          <div>
            <NavLink to='/shopping-bag' exact={true} activeClassName='active' className='nav-bar-headers'>
              <i className="fa-solid fa-bag-shopping"></i>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
