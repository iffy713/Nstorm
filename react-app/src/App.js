import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
// import User from './components/User';
import Addresses from './components/Addresses/Address';
import { authenticate } from './store/session';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import CategoryDetails from './components/Navigation/Categories/CategoryDetails';
import ShoppingBag from './components/ShoppingBag/ShoppingBag';
import MyAccount from './components/Account/MyAccount'
import ReviewOrder from './components/ShoppingBag/ReviewOrder';
import LoginPage from './components/auth/LoginPage';
import SignUpPage from './components/auth/SignUpPage';
import Footer from './components/Footer/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setLoaded={setLoaded}/>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginPage />
        </Route>

        <Route path='/sign-up' exact={true}>
          <SignUpPage />
        </Route>

        <ProtectedRoute path='/my-account' exact={true}>
          <MyAccount />
        </ProtectedRoute>

        <ProtectedRoute path='/checkout' exact={true}>
          <ReviewOrder />
        </ProtectedRoute>

        <ProtectedRoute path='/shopping-bag'>
          <ShoppingBag />
        </ProtectedRoute>

        <Route path='/products/:productId'>
          <ProductDetails />
        </Route>

        <Route path='/category/:categoryId'>
          <CategoryDetails />
        </Route>

        <Route path='/' exact={true} >
          <Products />
        </Route>

      </Switch>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
