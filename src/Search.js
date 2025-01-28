import React from 'react'
import { Link } from 'react-router-dom'

function Search() {


    return (
        <div className='flex p-[10px] bg-gray-100 rounded-lg gap-x-[10px] text-centre'>
            <div className='text-green bg-white w-full flex  gap-x-[2px] rounded-lg'>
                <input
                    type="text"
                    className="w-full px-4 py-2 border outline-none border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Source"
                    onChange={(e) => {localStorage.setItem('source',e.target.value)}}
                    required
                />
            </div>


            <div className='text-green bg-white w-full flex gap-x-[px] rounded-lg'>
                <input
                    type="text"
                    className="w-full px-4 py-2 border outline-none border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Destination"
                    onChange={(e)=>{localStorage.setItem('destination',e.target.value)}}
                    required
                />
            </div>

            <input
                type="date"
                className="w-full px-4 py-2 border outline-none border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-400"
                placeholder="Source"
                required
            />
            <Link to='/Booking'>  <button className="bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 focus:outline-none">SEARCH</button> </Link></div>
    )
}

export default Search