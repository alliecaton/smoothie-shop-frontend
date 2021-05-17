import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './reducers/cartReducer';
import smoothieReducer from './reducers/smoothieReducer'
import checkoutReducer from './reducers/checkoutReducer'
import {BrowserRouter as Router } from 'react-router-dom'


const rootReducer = combineReducers({
    cartReducer: cartReducer, 
    smoothieReducer: smoothieReducer, 
    checkoutReducer: checkoutReducer
})

const store = createStore(rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router>
        <App />
      </Router>
    </Provider >
  </React.StrictMode>,
  document.getElementById('root')
);


