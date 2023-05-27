
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AccoutButton from './AccountButton';
import Categories from './Categories/Categories'
import SearchBar from './SearchBar';
import UserButton from './UserButton';
import { thunkGetCategories } from '../../store/category'
import './NavBar.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = ({setLoaded}) => {

  const sessionUser = useSelector(state=> state.session.user)
  const dispatch = useDispatch()
  const categoriesObj = useSelector(state => state.category.allCategories)
  const categoriesArr = categoriesObj? Object.values(categoriesObj) : []
  // console.log(categoriesArr)
  const location = useLocation()

  useEffect(() =>{
    dispatch(thunkGetCategories())
  }, [dispatch, location])

  let sessionLink
  if(sessionUser){
    sessionLink = (
      <UserButton sessionUser={sessionUser}/>
    )
  } else {
    sessionLink = (
      <AccoutButton />
    )
  }

  // if(!setCategoryLoaded) return null

  return (
    <div className='nav-bar-outer'>
      <div className='nav-bar'>
        <div id='nav-upper'>
          <div id="nav-bar-child-left">
            <NavLink to='/' exact={true} activeClassName='active'>
                <img id="logo-img" src='https://drive.google.com/uc?export=view&id=1q8uKj7aY-vdBGj_cPd0lty-fyXCGCMwF' />
            </NavLink>
          </div>
          <div>
            <SearchBar />
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
        </div>
          <Categories categoriesArr={categoriesArr}/>
      </div>
    </div>
  );
}

export default NavBar;
