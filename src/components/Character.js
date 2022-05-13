import React from 'react';

const Character = ({ character }) => {
  return (
    <div className='character'>
      <h2>{character.name}</h2>
      <img src={character.image} className='avatar'></img>
    </div>
  );
};

export default Character;
