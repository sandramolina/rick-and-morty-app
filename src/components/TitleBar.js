import React from 'react';
import Search from './Search';

const TitleBar = ({
  searchText,
  handleSearchInput,
  handleFormSubmit,
  handleStatusSelection,
}) => {
  return (
    <div>
      <img src='logo.png' className='logo' alt='rick and morty name'></img>
      <h1 id='title'>Chararters Grid</h1>
      <Search
        searchText={searchText}
        handleSearchInput={handleSearchInput}
        handleStatusSelection={handleStatusSelection}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default TitleBar;
