import React from 'react'
import ReactDom from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'

import reducers from './reducer'
import './config'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRouter from './component/AuthRouter/AuthRouter'
import 'antd-mobile/dist/antd-mobile.css'
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))


ReactDom.render(
  (<Provider store = {store}>
    <BrowserRouter>
      <div>
        <AuthRouter></AuthRouter>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
      </div>
    </BrowserRouter>
   </Provider>),
   document.getElementById('root')
 )
