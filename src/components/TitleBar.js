import React from 'react';
import Search from './Search';

const TitleBar = ({ onFormSubmit }) => {
  return (
    <div>
      <img src='logo.png' className='logo' alt='rick and morty name'></img>
      <h1 id='title'>Chararters Grid</h1>
      <Search onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default TitleBar;
