import React, { useState, useEffect } from 'react';
import CharactersList from '../components/CharactersList';
import NotFound from '../components/NotFound';
import TitleBar from '../components/TitleBar';

const CharactersListBox = () => {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    loadCharacters();
  }, [query]);

  const loadCharacters = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then((res) => res.json())
      .then((charactersList) => setCharacters(charactersList.results))
      .catch((err) => console.error);
  };

  const handleSearchInput = (event) => {
    setSearchText(event.target.value);
    setQuery(searchText);
  };

  return (
    <>
      <div>
        <TitleBar
          searchText={searchText}
          handleSearchInput={handleSearchInput}
        />
      </div>
      <div>
        {characters ? <CharactersList characters={characters} /> : <NotFound />}
      </div>
    </>
  );
};

export default CharactersListBox;
