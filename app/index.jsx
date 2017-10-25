/* main.js */

'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx'

import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import reducer from './reducer.js'
let store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  ,
  document.getElementById('root')
)
