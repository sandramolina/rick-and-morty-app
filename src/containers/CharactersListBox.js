import React, { useState, useEffect } from 'react';
import CharactersList from '../components/CharactersList';
import TitleBar from '../components/TitleBar';

const CharactersListBox = () => {
  const [characters, setCharacters] = useState([]);
  const [SearchText, setSearchText] = useState('');

  //console.log(characters);
  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((charactersList) => setCharacters(charactersList.results))
      .catch((err) => console.error);
  };

  const handleSearchInput = (event) => setSearchText(event.target.value);

  return (
    <>
      <div>
        <TitleBar
          searchText={SearchText}
          handleSearchInput={handleSearchInput}
        />
      </div>
      <div>
        <CharactersList characters={characters} />
      </div>
    </>
  );
};

export default CharactersListBox;
