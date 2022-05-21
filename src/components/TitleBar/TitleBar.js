import React from 'react';
import './TitleBar.css';

const TitleBar = ({ children }) => {
  return (
    <div>
      <a href='http://localhost:3000/'>
        <img src='logo.png' className='logo' alt='rick and morty name'></img>
      </a>

      <h1 id='title'>{children}</h1>
    </div>
  );
};

export default TitleBar;
