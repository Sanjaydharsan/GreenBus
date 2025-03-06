// BusFilterPage.jsx
import React from "react";

const BusFilterPage = () => {

  return (
   
    <div className="bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Filters</h1>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Departure Time</h2>
          <select
            className="w-full p-2 border rounded-lg"
          >
            <option value="">All</option>
            <option value="morning">Morning (6 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
            <option value="evening">Evening (6 PM - 12 AM)</option>
            <option value="night">Night (12 AM - 6 AM)</option>
          </select>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Bus Type</h2>
          <div className="space-y-2">
            {["AC", "Non-AC", "Sleeper", "Seater"].map((type) => (
              <div key={type} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                <label htmlFor={type} className="text-gray-600">
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Price Range</h2>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              className="w-full p-2 border rounded-lg"
              placeholder="Min"
            />
            <span className="text-gray-600">to</span>
            <input
              type="number"
              className="w-full p-2 border rounded-lg"
              placeholder="Max"
            />
          </div>
        </div>

        {/* Apply Filters Button */}
        <button
          className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500" type="submit"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default BusFilterPage;
