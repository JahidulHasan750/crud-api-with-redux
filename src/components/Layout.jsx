import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Provider } from 'react-redux'
import store from '../store/Store'
const Layout = () => {
  return (
    <Provider store={store}>
       <div>
        <Navbar></Navbar>

        <Outlet></Outlet>
    </div>
    
    </Provider>
   
  )
}

export default Layout