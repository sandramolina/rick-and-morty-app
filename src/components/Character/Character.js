import React from 'react';
import './Character.css';

const Character = ({ character, onFaveClick, deleteToFavorite }) => {
  const { name, image, status, species, gender, origin, location } = character;
  const handleFaveClick = () => onFaveClick(character);
  const handleUnFaveClick = () => deleteToFavorite(character);
  return (
    <div className='character-card'>
      <div className='character-card-inner'>
        <div className='card-front'>
          <img
            src={image}
            className='avatar'
            alt={`character ${name} avatar`}
          ></img>
          <button onClick={handleFaveClick}>Fave</button>
          <button onClick={handleUnFaveClick}>Un-fave</button>
        </div>
        <div className='card-back'>
          <h2>{name}</h2>
          <ul className='character-cards-list'>
            <li>
              <span
                className={
                  status === 'Alive'
                    ? 'status-icon-alive'
                    : status === 'Dead'
                    ? 'status-icon-dead'
                    : 'status-icon-unknown'
                }
              ></span>
              <strong>Stats:</strong> {status}
            </li>
            <li>
              <strong>Species:</strong> {species}
            </li>
            <li>
              <strong>Gender:</strong> {gender}
            </li>
            <li>
              <strong>Origin:</strong> {origin.name}
            </li>
            <li>
              <strong>Last known location:</strong> {location.name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Character;
