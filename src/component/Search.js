import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Added useNavigate for programmatic navigation
import { SearchContext } from './searchContext'; 

function Search() {
    const { searchData, setSearchData } = useContext(SearchContext);
    const navigate = useNavigate();  // useNavigate hook for programmatic navigation

    const handleChange = (e) => {
        setSearchData({ ...searchData, [e.target.name]: e.target.value });
    };

    const handleSearch = (e) => {
        // Prevent form submission if validation fails
        e.preventDefault();

        // Check if the input fields are filled
        if (!searchData.source || !searchData.destination || !searchData.date) {
            alert('All fields are required'); // Display alert if validation fails
            return;
        }

        // If validation is successful, navigate to the Booking page
        navigate('/Booking'); // Navigate programmatically to the Booking page
    };

    return (
        <div className='flex p-[10px] bg-gray-100 rounded-lg gap-x-[10px] text-centre'>
            <div className='text-gray-600 bg-white w-full flex gap-x-[2px] rounded-lg'>
                <input
                    type="text"
                    name="source"
                    value={searchData.source}
                    className="w-full px-4 py-2 border outline-none border-gray-300 rounded-lg focus:ring-green focus:border-green"
                    placeholder="Source"
                    onChange={handleChange}
                    required
                />
            </div>

            <div className='text-gray-600 bg-white w-full flex gap-x-[2px] rounded-lg'>
                <input
                    type="text"
                    name="destination"
                    value={searchData.destination}
                    className="w-full px-4 py-2 border outline-none border-gray-300 rounded-lg focus:ring-green focus:border-green"
                    placeholder="Destination"
                    onChange={handleChange}
                    required
                />
            </div>

            <input
                type="date"
                name="date"
                value={searchData.date}
                className="w-full px-4 py-2 text-gray-600 border outline-none border-gray-300 rounded-lg focus:ring-green focus:border-green text-gray-400"
                onChange={handleChange}
                required
            />

            <button
                className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 focus:outline-none"
                onClick={handleSearch}
            >
                SEARCH
            </button>
        </div>
    );
}

export default Search;
