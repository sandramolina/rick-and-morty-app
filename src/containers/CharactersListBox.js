import React, { useState, useEffect } from 'react';
import CharactersList from '../components/CharactersList';
import TitleBar from '../components/TitleBar';

const CharactersListBox = () => {
  const [characters, setCharacters] = useState([]);
  const [SearchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    loadCharacters();
  }, [query]);

  const loadCharacters = () =>
    fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then((res) => res.json())
      .then((charactersList) => setCharacters(charactersList.results))
      .catch((err) => console.error);

  const handleSearchInput = (event) => {
    setSearchText(event.target.value);
    setQuery(event.target.value);
  };

  return (
    <>
      <div>
        <TitleBar
          searchText={SearchText}
          handleSearchInput={handleSearchInput}
        />
      </div>
      <div>
        {characters ? (
          <CharactersList characters={characters} />
        ) : (
          <h1>No results found</h1>
        )}
      </div>
    </>
  );
};

export default CharactersListBox;
