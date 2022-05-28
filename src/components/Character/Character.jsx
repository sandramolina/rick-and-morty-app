/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import './Character.css';

function Character({
  character,
  onFaveClick,
  deleteToFavorite,
  favesCharacters,
  onPlusInfoClick,
}) {
  const {
    name, image, status, species, gender, origin, location,
  } = character;
  const handleFaveClick = () => {
    if (favesCharacters.includes(character)) {
      deleteToFavorite(character);
    } else {
      onFaveClick(character);
    }
  };

  const handlePlusInfoClick = (e) => {
    onPlusInfoClick(e);
  };

  return (
    <div className="character-card">
      <div className="character-card-inner">
        <div className="card-front">
          <img
            src={image}
            className="avatar"
            alt={`character ${name} avatar`}
          />
          <div className="card-buttom">
            <button
              type="button"
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
                <FontAwesomeIcon icon={faStar} />
              </i>
            </button>
            <button
              className="info-btn"
              onClick={handlePlusInfoClick}
              value={character.id}
            >
              <i className="more-info">
                <FontAwesomeIcon icon={faCircleInfo} />
              </i>
            </button>
            <h3 className="front-name">{name}</h3>
          </div>
        </div>
        <div className="card-back">
          <h2>{name}</h2>
          <ul className="character-cards-list">
            <li aria-label="status">
              <span
                aria-label="status-icon"
                className={
                  status === 'Alive'
                    ? 'status-icon-alive'
                    : status === 'Dead'
                      ? 'status-icon-dead'
                      : 'status-icon-unknown'
                }
              />
              <strong>Stats:</strong>
              {' '}
              {status}
            </li>
            <li>
              <strong>Species:</strong>
              {' '}
              {species}
            </li>
            <li>
              <strong>Gender:</strong>
              {' '}
              {gender}
            </li>
            <li>
              <strong>Origin:</strong>
              {' '}
              {origin.name}
            </li>
            <li>
              <strong>Last known location:</strong>
              {' '}
              {location.name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Character;
