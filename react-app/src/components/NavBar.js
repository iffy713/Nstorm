
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {


  // const user = useSelector(state=> state.session.user.first_name)



  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
          <li>
            {/* {user ? (
              <NavLink to='/login' exact={true} activeClassName='active'>
              Hi, {user}
            </NavLink>
            ) : (
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            )} */}
            <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
          </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' exact={true} activeClassName='active'>
            My Account
          </NavLink>
        </li>
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to='/my-account/my-reviews' exact={true} activeClassName='active'>
            Manage My Reviews
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-account/address-book" exact={true} activeClassName='active'>
            Addresses
          </NavLink>
        </li> */}
        <li>
          <NavLink to='/shopping-bag' exact={true} activeClassName='active'>
            Shopping Bag
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
