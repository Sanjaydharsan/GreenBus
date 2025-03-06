import React from 'react';

const Offer = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Green Assured Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="max-w-6xl mx-auto px-4">

          {/* Header Section */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center shadow-lg">
              {/* Check Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-lg font-semibold">Green Assured</span>
            </div>
          </div>

          {/* Refund & Service Guarantee Offers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">

            {/* Refund on Cancellation */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-center mb-2">
                <p><i className="fa-solid fa-plane-slash"></i></p>
              </div>
              <p className="font-bold text-lg">Up to 150% Refund</p>
              <p className="text-gray-600">On Bus Cancellation</p>
            </div>

            {/* Refund for Poor Service */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-center mb-2">
                <p><i className="fa-solid fa-wind"></i></p>
              </div>
              <p className="font-bold text-lg">Up to 100% Refund</p>
              <p className="text-gray-600">for Bad Service Quality</p>
            </div>

            {/* Refund for Delays */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-center mb-2">
                <p><i className="fa-solid fa-hourglass-half"></i></p>
              </div>
              <p className="font-bold text-lg">Up to 100% Refund</p>
              <p className="text-gray-600">For Bus Delays</p>
            </div>

            {/* Refund for Plan Changes */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-center mb-2">
                <p><i className="fa-solid fa-ticket"></i></p>
              </div>
              <p className="font-bold text-lg">100% Refund</p>
              <p className="text-gray-600">If You Change Plans</p>
            </div>

          </div>

          {/* Know More Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
              Know more &gt;
            </button>
          </div>

        </div>
      </div>

      {/* Special Green Offer Banner */}
      <div className="bg-green text-white p-4 rounded-lg shadow-lg flex items-center justify-between mb-6">
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


      {/* Online Bus Booking Services */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-2">Online Bus Booking Services</h2>
        <p className="text-gray-700 mb-2">
          AbhiBus is India’s leading online bus ticket booking service provider. Check out budget-friendly offers and save big with discount coupons.
        </p>
        <p className="text-gray-700 mb-2">
          The online bus booking process is now easier than ever. Modify or cancel your ticket with ease using AbhiCash for quick refunds.
        </p>
        <p className="text-gray-700">
          Browse available routes and use our smart filters to find the best bus for your travel needs.
        </p>
      </div>

      {/* Lowest Price Bus Ticket Booking */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-2">Online Bus Ticket Booking at Lowest Price</h2>
        <p className="text-gray-700 mb-4">
          With AbhiBus, book bus tickets online at the lowest fares and choose your preferred bus type.
        </p>

        {/* Bus Categories */}
        <div className="gap-6 flex">
          <ul className="list-disc list-inside text-gray-700">
            <li>AC Buses</li>
            <li>Non AC Buses</li>
            <li>Ordinary Buses</li>
            <li>Mini Buses</li>
            <li>Super Luxury (Non-AC Seater)</li>
          </ul>
          <ul className="list-disc list-inside text-gray-700">
            <li>Volvo AC Buses</li>
            <li>Sleeper AC Buses</li>
            <li>Sleeper Buses</li>
            <li>Deluxe Buses</li>
            <li>Sleeper Cum Seater AC</li>
          </ul>
          <ul className="list-disc list-inside text-gray-700">
            <li>Double Decker Buses</li>
            <li>Mercedes Buses</li>
            <li>Non-Mercedes Buses</li>
            <li>Electric Buses</li>
            <li>Express Buses</li>
          </ul>
        </div>

        <p className="text-gray-700 mt-4">
          Ticket fares vary depending on bus type, operator, route, and time of booking. Prices may be higher during peak seasons.
        </p>
      </div>


    </div>
  );
};

export default Offer;
