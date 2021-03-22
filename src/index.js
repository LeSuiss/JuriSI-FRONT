import React from 'react'
import ReactDOM from 'react-dom'
import './scss/App.scss'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from "./rootReducer"

import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
rootReducer, composeWithDevTools(),

);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
