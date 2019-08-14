/* main.js */

'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware,createStore } from 'redux' //applyMiddleware可以添加應用層
import { Provider } from 'react-redux'
import logger from 'redux-logger' //第三方套件 適用於中介層 可以看action前和後的狀態
import App from './App.jsx'
// import Add from './component/Add.jsx'
import Show from './component/Show.jsx'
import thunk from 'redux-thunk';
import { BrowserRouter, Switch,HashRouter,Route } from 'react-router-dom';
import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import reducer from './reducer.js'　　// reducer

let reducer_store = createStore(reducer,
    applyMiddleware(thunk,logger)) //放入中間件
// store綁定reducer createStore創建一個store 
// store.dispatch方法會觸發Reducer的自動執行。  
//為此，Store需要知道Reducer函數
//做法就是在生成Store的時候，將Reducer傳入createStore方法
ReactDOM.render( //   store屬性 綁定store內容 讓App組件可以使用store
    <Provider store={reducer_store}>
        <HashRouter>
            <Switch>
                {/* <Route path="/Add" component={Add}/> */}
                <Route path="/Show" component={Show}/>
                <Route path="/" component={App}/>
            </Switch>
        </HashRouter>
    </Provider>
  ,
//   hashHistory
  document.getElementById('root')
)
