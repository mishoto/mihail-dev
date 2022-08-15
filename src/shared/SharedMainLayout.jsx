import React from 'react'
import Navbar from '../components/navbar/Navbar'

import {Outlet} from 'react-router-dom'


const SharedMainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default SharedMainLayout