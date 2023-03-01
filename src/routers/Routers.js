import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profil from '../pages/Profile'

function Routers() {
  return (
    <>
     <Routes>
            <Route index element={<Home/>}/>
            <Route path='/detail' element={<Detail/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profil' element={<Profil/>}/>
     </Routes>
    </>
  )
}

export default Routers