import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Booking from './component/Booking'
import LoginPage from './component/signin'
import { SearchProvider } from './component/searchContext'


function App() {
  return (

    <div>
      <SearchProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Booking' element={<Booking />} />
        <Route path='/sign in' element={<LoginPage />} />
      </Routes>
      </SearchProvider>
    </div>
  )
}

export default App