import React, { createContext, useState } from 'react';

// Create Context
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchData, setSearchData] = useState({ source: '', destination: '', date: '' });

    return (
        <SearchContext.Provider value={{ searchData, setSearchData }}>
            {children}
        </SearchContext.Provider>
    );
};
