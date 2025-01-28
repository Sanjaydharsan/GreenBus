import React, { useEffect, useState } from 'react'
import BusFilterPage from './filter';
import Search from './Search';

function Booking() {
  const [des, setdes] = useState('')
  const [sou, setsou] = useState('')
  useEffect(() => {
    setdes(localStorage.getItem('destination'))
    setsou(localStorage.getItem('source'))
  }, [])

  return (
    <div className='bg-gray-100'>
      <div className='bg-gray-100 '>
        <div className='w-[700px]'>
          <Search />
        </div></div>
      <div className='flex justify-between'>
        <div className='w-[300px] ' >
          <BusFilterPage />
        </div>

        <div id='bus-details' className=' bg-gray-100 px-8 py-6 w-[950px] mx-auto'>
          <div className='space-y-6'>
            {[
              { name: 'Sk Travels', time: '20:30', duration: '14h', reach: '10:30', fare: '1200 INR' },
              { name: 'Red Bus', time: '18:00', duration: '16h 30m', reach: '10:30', fare: '800 INR' },
              { name: 'Kochi Express', time: '22:15', duration: '12h', reach: '10:15', fare: '1500 INR' },
              { name: 'Vega Travels', time: '23:00', duration: '9h', reach: '08:00', fare: '1000 INR' },
              { name: 'Indo Bus', time: '21:00', duration: '10h', reach: '07:00', fare: '950 INR' },
              { name: 'Goa Travels', time: '19:30', duration: '10h 30m', reach: '06:00', fare: '1100 INR' },
              { name: 'South Bus', time: '20:45', duration: '7h', reach: '03:45', fare: '850 INR' },
              { name: 'Mysore Travels', time: '17:30', duration: '17h 30m', reach: '10:30', fare: '750 INR' },
              { name: 'Express Connect', time: '16:00', duration: '10h', reach: '10:30', fare: '600 INR' },
              { name: 'Mountain Ride', time: '15:00', duration: '15h', reach: '10:30', fare: '850 INR' },
              { name: 'Golden Travels', time: '20:00', duration: '11h 30m', reach: '07:30', fare: '700 INR' },
              { name: 'Royal Coach', time: '14:00', duration: '6h', reach: '20:00', fare: '950 INR' }
            ].map((bus, index) => (
              <div key={index} className='flex gap-x-8 bg-white text-black p-6 w-full justify-between rounded-2xl shadow-lg'>
                <div className='space-y-2'>
                  <h1 className='text-xl font-bold'>{bus.name}</h1>
                  <p className='text-sm'>Volvo AC Sleeper (2+1)</p>
                  <p className='text-sm'>4.6 ★ Live Tracking Amenities</p>
                </div>
                <div className='flex gap-x-8'>
                  <div className='text-center'>
                    <h1 className='text-2xl font-semibold'>{bus.time}</h1>
                    <p className='text-sm'>{sou}</p>
                  </div>

                  <div className='text-center'>
                    <h1 className='text-2xl font-semibold'>{bus.duration}</h1>
                    <p className='text-sm'>Duration</p>
                  </div>

                  <div className='text-center'>
                    <h1 className='text-2xl font-semibold'>{bus.reach}</h1>
                    <p className='text-sm'>{des}</p>
                  </div>
                </div>
                <div className='flex flex-col items-center'>
                  <h1 className='text-2xl font-semibold'>{bus.fare}</h1>
                  <button className='mt-4 px-4 py-2 bg-green text-white rounded-md hover:bg-green-2 transition'>
                    Book Seats
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>






    </div>
  )
}

export default Booking