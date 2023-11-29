import React, { useState } from 'react';

export default function Searchbar() {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        console.log('Searching for:', searchText);
    };

    return (
        <div className="Searchbar">
            <img src="loupe.svg" alt="search" onClick={handleSearch}/>
            <input type="text" className="Searchbar-input" placeholder="Search for a movie..." value={searchText} onChange={handleInputChange}/>
        </div>
    );
}