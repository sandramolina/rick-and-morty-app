import React from 'react';
import Character from './Character';

const CharactersList = ({ characters }) => {
  //console.log({characters})
  return (
    <div className='characters'>
      {characters.map((character) => (
        <Character key={character['id']} character={character} />
      ))}
    </div>
  );
};

export default CharactersList;
