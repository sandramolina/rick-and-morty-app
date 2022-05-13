import React from 'react';

const Character = ({ character }) => {
  return (
    <div className='character-card'>
      <div className='character-card-inner'>
        <div className='card-front'>
          <img src={character.image} className='avatar'></img>
        </div>
        <div className='card-back'>
          <h2>{character.name}</h2>
          <ul>
            <li>
              <strong>Stats:</strong> {character.status}
            </li>
            <li>
              <strong>Species:</strong> {character.species}
            </li>
            <li>
              <strong>Gender:</strong> {character.gender}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Character;
