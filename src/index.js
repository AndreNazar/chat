import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, compose, createStore } from 'redux';
import {Provider} from 'react-redux'
import App from './App';
import allReducers from './reducers';
import thunk from 'redux-thunk'

const store = createStore(allReducers, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);