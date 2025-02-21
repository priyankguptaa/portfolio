import React from 'react'
import Header from './Header/Header.jsx'
import Footer from './Footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
