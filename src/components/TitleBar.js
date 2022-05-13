import React from 'react';
import Search from './Search';

const TitleBar = ({ searchText, handleSearchInput }) => {
  return (
    <div>
      <img src='logo.png' className='logo'></img>
      <h1 id='title'>Chararters Grid</h1>
      <Search searchText={searchText} handleSearchInput={handleSearchInput} />
    </div>
  );
};

export default TitleBar;
