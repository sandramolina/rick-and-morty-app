import React from 'react';
import './TitleBar.css';

const TitleBar = () => {
  return (
    <div>
      <a href='http://localhost:3000/'>
        <img src='logo.png' className='logo' alt='rick and morty name'></img>
      </a>

      <h1 id='title'>Chararters Grid</h1>
    </div>
  );
};

export default TitleBar;
