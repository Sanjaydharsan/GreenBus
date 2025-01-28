import React from 'react'
import Search from './Search'
import Footer from './footer'
import bannerimg from './banner.jpg'
function Home() {
  return (
    <div>
       <div className="flex justify-center">
       <h1 className='text-white text-5xl font-bold absolute pt-[60px]'>India's No. 1 Online Bus Ticket Booking Site
       </h1>

       <div className=' absolute translate-y-[30vh]'>
        <Search />
      </div>
      <img
      src={bannerimg}
        alt="Banner"
        className="w-full  h-[80vh] "
      />
    </div>
      
      <div className='px-[120px] py-[40px]'>

        <div className="bg-green text-white p-4 rounded-lg shadow-lg flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-semibold">🚍 Green Offer!</span>
          </div>

          <div className="ml-4 text-lg">
            <p>Get 20% off on your next bus booking!</p>
            <p className="text-sm">Hurry, offer ends soon!</p>
          </div>

          <div>
            <button className="bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 focus:outline-none">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Footer />

    </div>

  )
}

export default Home