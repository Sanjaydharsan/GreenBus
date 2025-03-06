import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-green text-white flex justify-between  p-[20px]'>
      
    <Link to='/Home'><div className='text-3xl font-bold'>GREEN BUS</div> </Link>
    <Link to='/sign in'> <p className='text-white text-2xl'><i class="fa-solid fa-user"></i></p></Link>
    </div>
    
  )
}

export default Navbar