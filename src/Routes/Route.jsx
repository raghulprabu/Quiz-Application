import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Component/Logine/Login'
import Register from '../Component/Logine/Register'
import Main from '../Component/Home/Main'
import Quize from '../Component/Quize/Quize'

const AllRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/main' element={<Main />} />
        <Route path='/quiz' element={<Quize />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoute
