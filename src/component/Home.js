import React from 'react';
import Search from './Search';
import Footer from './footer';
import bannerimg from '../asset/banner.jpg';
import Offer from './Offer';
import Navbar from './Navbar';

function Home() {
  return (
    <div className='bg-gray-100'>
      <Navbar />

      {/* Banner Section */}
      <div className="relative w-full h-[80vh]">
        {/* Background Image */}
        <img
          src={bannerimg}
          alt="Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay Content: Heading and Search Bar */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* Title */}
          <h1 className="text-white bg-green p-2 rounded-lg  text-5xl font-bold mb-6">
           BOOK BUS TICKET
          </h1>

          {/* Search Component */}
          <div className="mt-4">
            <Search />
          </div>
        </div>
      </div>

      {/* Bus Booking Information Section */}
      <Offer />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Home;
