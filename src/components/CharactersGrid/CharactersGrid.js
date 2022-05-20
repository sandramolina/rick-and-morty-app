import React from 'react';
import './CharactersGrid.css';
import Character from '../Character/Character';

const CharactersGrid = ({
  characters,
  onFaveClick,
  deleteToFavorite,
  favesCharacters,
}) => {
  return (
    <div className='characters'>
      {characters.map((character) => (
        <Character
          key={character['id']}
          character={character}
          onFaveClick={onFaveClick}
          deleteToFavorite={deleteToFavorite}
          favesCharacters={favesCharacters}
        />
      ))}
    </div>
  );
};

export default CharactersGrid;
