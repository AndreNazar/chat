import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, compose, createStore } from 'redux';
import {Provider} from 'react-redux'
import App from './App';
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import allReducers from './reducers';

const store = createStore(allReducers, compose(
  applyMiddleware(
    thunk
  )
  ));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);