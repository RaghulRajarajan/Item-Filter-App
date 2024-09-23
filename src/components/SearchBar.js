// src/components/SearchBar.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/itemsSlice';
import '../App.css'; // Make sure to import the CSS file

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className="search-container">
      <input
        className="search-bar" // Add class for styling
        type="text"
        onChange={handleChange}
        placeholder="Search items..."
      />
    </div>
  );
};

export default SearchBar;
