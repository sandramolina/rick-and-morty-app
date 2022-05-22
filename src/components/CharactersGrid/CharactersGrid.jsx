/* eslint-disable react/prop-types */
import React from 'react';
import './CharactersGrid.css';
import Character from '../Character/Character';

function CharactersGrid({
  characters,
  onFaveClick,
  deleteToFavorite,
  favesCharacters,
  onPlusInfoClick,
}) {
  return (
    <div className="characters">
      {characters.map((character) => (
        <Character
          key={character.id}
          character={character}
          onFaveClick={onFaveClick}
          deleteToFavorite={deleteToFavorite}
          favesCharacters={favesCharacters}
          onPlusInfoClick={onPlusInfoClick}
        />
      ))}
    </div>
  );
}

export default CharactersGrid;
