import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import foodReducer from './store/Food/foodStore';
import drinkReducer from './store/Drink/drinkStore';
import sharedReducer from './store/Shared/sharedStore';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  food: foodReducer,
  drink: drinkReducer,
  shared: sharedReducer
});


const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
