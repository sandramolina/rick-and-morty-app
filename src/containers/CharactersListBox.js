import React, { useState, useEffect } from 'react';
import CharactersList from '../components/CharactersList';
import NotFound from '../components/NotFound';
import ResultsPagination from '../components/ResultsPagination';
import TitleBar from '../components/TitleBar';

const CharactersListBox = () => {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');
  const [pages, setPages] = useState(0);
  const [pageNumber, setPageNumber] = useState('');

  useEffect(() => {
    loadCharacters(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${query}`
    );
  }, [pageNumber, query]);

  const loadCharacters = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((charactersList) => {
        setCharacters(charactersList.results);
        setPages(charactersList.info.pages);
      })
      .catch((err) => console.error);
  };

  const handleSearchInput = (event) => {
    setSearchText(event.target.value);
    setQuery(searchText);
  };

  const loadPage = (event) => {
    setPageNumber(event.target.value);
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
        {characters ? (
          <>
            <ResultsPagination loadPage={loadPage} pages={pages} />
            <CharactersList characters={characters} />
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};

export default CharactersListBox;
