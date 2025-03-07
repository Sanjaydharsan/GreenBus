import React, { useEffect, useState, useContext } from 'react';
import BusFilterPage from './filter';
import Search from './Search';
import Navbar from './Navbar';
import { SearchContext } from './searchContext';

function Booking() {
  const { searchData } = useContext(SearchContext);
  const [des, setdes] = useState('');
  const [sou, setsou] = useState('');

  const busdetail = [
    { name: 'Sk Travels', time: '20:30', duration: '14h 00m', reach: '10:30', fare: '1200 INR' },
    { name: 'Red Bus', time: '18:00', duration: '16h 30m', reach: '10:30', fare: '800 INR' },
    { name: 'Kochi Express', time: '22:15', duration: '12h 00m', reach: '10:15', fare: '1500 INR' },
    { name: 'Vega Travels', time: '23:00', duration: '9h 00m', reach: '08:00', fare: '1000 INR' },
    { name: 'Indo Bus', time: '21:00', duration: '10h 00m', reach: '07:00', fare: '950 INR' },
    { name: 'Goa Travels', time: '19:30', duration: '10h 30m ', reach: '06:00', fare: '1100 INR' },
    { name: 'South Bus', time: '20:45', duration: '7h 00m', reach: '03:45', fare: '850 INR' },
    { name: 'Mysore Travels', time: '17:30', duration: '17h 30m', reach: '10:30', fare: '750 INR' },
    { name: 'Express Connect', time: '16:00', duration: '10h 00m', reach: '10:30', fare: '600 INR' },
    { name: 'Mountain Ride', time: '15:00', duration: '15h 00m', reach: '10:30', fare: '850 INR' },
    { name: 'Golden Travels', time: '20:00', duration: '11h 30m', reach: '07:30', fare: '700 INR' },
    { name: 'Royal Coach', time: '14:00', duration: '6h 00m', reach: '20:00', fare: '950 INR' }
  ];

  useEffect(() => {
    setdes(searchData.destination);
    setsou(searchData.source);
  }, [searchData]);

  return (
    <>
      <div className='bg-gray-100'>
        <div className='bg-gray-100 fixed w-full'>
          <div>
            <Navbar />
            <div className='w-[700px]'>
              <Search />
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='w-[300px] fixed mt-[130px] ' >
            <BusFilterPage />
          </div>
          <div id='bus-details' className=' bg-gray-100 px-8 py-6 w-[950px] mt-[130px] ml-[350px] '>
            <div className='space-y-6'>
              {busdetail.map((bus, index) => (
                <div key={index} className='flex gap-x-8 bg-white text-gray-800 p-6 w-full justify-between rounded-2xl shadow-lg'>
                  <div className='space-y-5'>
                    <div>
                    <h2 className="font-bold text-lg">{bus.name}</h2>
                    <p className="text-gray-500">A/C Sleeper (2+1)</p></div>
                    <div className='text-sm flex gap-x-2' >
                      <p className='bg-green text-white px-[2px] rounded-md'>4.6 ★</p> 
                    <p className='p-[0px]'><i class="fa-solid fa-location-dot"></i></p>
                    <p className='p-[0px]'><i class="fa-solid fa-bottle-water"></i></p>
                    <p className='p-[0px]'><i class="fa-solid fa-plug"></i></p>
                    <p>more +3</p>
                     </div>
                  </div>
                  <div className='flex gap-x-8'>
                    <div className='text-center'>
                      <h1 className='text-xl font-bold'>{bus.time}</h1>
                      <p className='text-sm font-semibold'>{sou.toUpperCase()}</p>
                    </div>
                    <div className='text-center'>
                      <h1 className="text-gray-400">{bus.duration}</h1>
                    </div>
                    <div className='text-center'>
                      <h1 className='text-xl font-bold'>{bus.reach}</h1>
                      <p className='text-sm font-semibold'>{des.toUpperCase()}</p>
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
    </>
  );
}

export default Booking;
