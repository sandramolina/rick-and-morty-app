import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './Character.css';

const Character = ({
  character,
  onFaveClick,
  deleteToFavorite,
  favesCharacters,
}) => {
  const { name, image, status, species, gender, origin, location } = character;
  const handleFaveClick = () => {
    if (favesCharacters.includes(character)) {
      deleteToFavorite(character);
    } else {
      onFaveClick(character);
    }
  };

  return (
    <div className='character-card'>
      <div className='character-card-inner'>
        <div className='card-front'>
          <img
            src={image}
            className='avatar'
            alt={`character ${name} avatar`}
          ></img>
          <button
            onClick={handleFaveClick}
            className={
              favesCharacters.includes(character) ? 'fave-btn' : 'unfave-btn'
            }
          >
            <i
              className={
                favesCharacters.includes(character) ? 'faved' : 'unfaved'
              }
            >
              <FontAwesomeIcon icon={faHeart} />
            </i>
            Fave
          </button>
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
