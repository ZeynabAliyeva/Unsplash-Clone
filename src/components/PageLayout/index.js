import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

function PageLayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default PageLayout