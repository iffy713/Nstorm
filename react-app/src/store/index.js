import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import addressReducer from './address';
import productReducer from './product';
import cartReducer from './cart';
import reviewReducer from './review';
import orderReducer from './order';
import categoryReducer from './category';

const rootReducer = combineReducers({
  session,
  addresses: addressReducer,
  product: productReducer,
  cartItems: cartReducer,
  review: reviewReducer,
  orders: orderReducer,
  category: categoryReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
