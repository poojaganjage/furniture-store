import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import cartReducer from './redux/cart';
import productReducer from './redux/product';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const rootReducer = combineReducers({
  cart: cartReducer, // => state value.
  product: productReducer // => state value.
});

const store = configureStore({reducer: rootReducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
