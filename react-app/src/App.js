import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
// import User from './components/User';
import Addresses from './components/Addresses/Address';
import { authenticate } from './store/session';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import ShoppingBag from './components/ShoppingBag/ShoppingBag';
import UserReviews from './components/Reviews/UserReviews';
import MyAccount from './components/Account/MyAccount'
import UserOrders from './components/Orders/UserOrders';
import ReviewOrder from './components/ShoppingBag/ReviewOrder';

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
          <LoginForm />
        </Route>

        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>

        {/* <ProtectedRoute path='/my-account/my-orders'>
          <UserOrders />
        </ProtectedRoute>

        <ProtectedRoute path='/my-account/my-reviews'>
          <UserReviews />
        </ProtectedRoute>

        <ProtectedRoute path='/my-account/address-book' exact={true}>
          <Addresses />
        </ProtectedRoute> */}

        <ProtectedRoute path='/my-account' exact={true}>
          <MyAccount />
        </ProtectedRoute>

        <ProtectedRoute path='/checkout' exact={true}>
          <ReviewOrder />
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

        <Route path='/products/:productId'>
          <ProductDetails />
        </Route>

        <Route path='/' exact={true} >
          {/* <h1>My Home Page</h1> */}
          <Products />
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
