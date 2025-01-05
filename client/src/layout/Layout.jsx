import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'
import FooterSection from '../component/FooterSection'

function Layout() {
  return (
    <div className="min-h-screen">
  <Navbar/>
  <Outlet/>
  <FooterSection/>

    </div>
  )
}

export default Layout
