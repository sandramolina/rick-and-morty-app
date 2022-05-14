import React, { useState, useEffect } from 'react';
import CharactersList from '../components/CharactersList';
import NotFound from '../components/NotFound';
import ResultsPagination from '../components/ResultsPagination';
import TitleBar from '../components/TitleBar';

const CharactersListBox = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(0);
  const [pageNumber, setPageNumber] = useState('');

  const [searchText, setSearchText] = useState('');
  const [status, setStatus] = useState('');
  const [search, setSearch] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const nameToSearch = searchText;
    const statusToSearch = status;

    setSearch(true);
  };

  useEffect(() => {
    loadCharacters(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${nameToSearch}&status=${stastatusToSearch}`
    );
    // setPageNumber('');
  }, [pageNumber, search, nameToSearch, statusToSearch]);

  const loadCharacters = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((charactersList) => {
        setCharacters(charactersList.results);
        setPages(charactersList.info.pages);
      })
      .catch((err) => console.error);
  };

  const handleSearchInput = (event) => setSearchText(event.target.value);

  const handleStatusSelection = (event) => setStatus(event.target.value);

  const loadPage = (event) => {
    setPageNumber(event.target.value);
  };

  return (
    <>
      <div>
        <TitleBar
          searchText={searchText}
          handleSearchInput={handleSearchInput}
          handleStatusSelection={handleStatusSelection}
          handleFormSubmit={handleFormSubmit}
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
