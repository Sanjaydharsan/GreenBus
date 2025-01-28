import React from 'react'
import Home from './Home'
import Booking from './Booking'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './signin'
import Navbar from './Navbar'


function App() {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Booking' element={<Booking />} />
        <Route path='/sign in' element={<LoginPage />} />
      </Routes>

    </div>
  )
}

export default App