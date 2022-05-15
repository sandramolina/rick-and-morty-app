import React from 'react';
import './Character.css';

const Character = ({ character }) => {
  return (
    <div className='character-card'>
      <div className='character-card-inner'>
        <div className='card-front'>
          <img
            src={character.image}
            className='avatar'
            alt='character avatar'
          ></img>
        </div>
        <div className='card-back'>
          <h2>{character.name}</h2>
          <ul className='character-cards-list'>
            <li>
              <span
                className={
                  character.status === 'Alive'
                    ? 'status-icon-alive'
                    : character.status === 'Dead'
                    ? 'status-icon-dead'
                    : 'status-icon-unknown'
                }
              ></span>
              <strong>Stats:</strong> {character.status}
            </li>
            <li>
              <strong>Species:</strong> {character.species}
            </li>
            <li>
              <strong>Gender:</strong> {character.gender}
            </li>
            <li>
              <strong>Origin:</strong> {character.origin.name}
            </li>
            <li>
              <strong>Last known location:</strong> {character.location.name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Character;
