import React, { useState, useEffect } from 'react';
import CharactersGrid from '../components/CharactersGrid/CharactersGrid';
import NotFound from '../components/NotFound/NotFound';
import ResultsPagination from '../components/ResultsPagination/ResultsPagination';
import TitleBar from '../components/TitleBar/TitleBar';
import Search from '../components/Search/Search';

const CharactersGridBox = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(0);
  const [pageNumber, setPageNumber] = useState('');

  const [nameToSearch, setNameToSearch] = useState('');
  const [statusToSearch, setStatusToSearch] = useState('');
  const [genderToSearch, setGenderToSearch] = useState('');

  useEffect(() => {
    fetchCharacters(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${nameToSearch}&status=${statusToSearch}&gender=${genderToSearch}`
    );
  }, [pageNumber, statusToSearch, nameToSearch, genderToSearch]);

  const fetchCharacters = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((charactersGrid) => {
        setCharacters(charactersGrid.results);
        setPages(charactersGrid.info.pages);
      })
      .catch((err) => console.error);
  };

  const onPageChange = (event) => {
    setPageNumber(event.target.value);
  };

  const onSearch = (characterSearch) => {
    setNameToSearch(characterSearch.name);
    setStatusToSearch(characterSearch.status);
    setGenderToSearch(characterSearch.gender);
    setPageNumber('');
  };

  return (
    <>
      <div>
        <TitleBar />
        <Search onFormSubmit={onSearch} />
      </div>
      <div>
        {characters ? (
          <>
            <CharactersGrid characters={characters} />
            <ResultsPagination onPageChange={onPageChange} pages={pages} />
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};

export default CharactersGridBox;
