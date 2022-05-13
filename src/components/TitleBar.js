import React from 'react';
import Search from './Search';

const TitleBar = ({ searchText, handleSearchInput }) => {
  return (
    <div>
      <h1>Rick & Morty Chararters Grid</h1>
      <Search searchText={searchText} handleSearchInput={handleSearchInput} />
    </div>
  );
};

export default TitleBar;
