import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
// import Addresses from './components/Address';
import Addresses from './components/Addresses/Address';
import { authenticate } from './store/session';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import ShoppingBag from './components/ShoppingBag/ShoppingBag';
import CreateAddressForm from './components/CreateAddressFormModal/CreateAddressForm';

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
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/address-book/new' exact={true}>
          <CreateAddressForm />
        </ProtectedRoute>
        <ProtectedRoute path='/address-book' exact={true}>
          <Addresses />
        </ProtectedRoute>

        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute> */}
        {/* <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}
        <ProtectedRoute path='/shopping-bag'>
          <ShoppingBag />
        </ProtectedRoute>
        <ProtectedRoute path='/products/:productId'>
          <ProductDetails />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          {/* <h1>My Home Page</h1> */}
          <Products />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
