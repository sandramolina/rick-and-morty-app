import React, { useState, useEffect } from 'react';
import CharactersList from '../components/CharactersList';
import NotFound from '../components/NotFound';
import ResultsPagination from '../components/ResultsPagination';
import TitleBar from '../components/TitleBar';

const CharactersListBox = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(0);
  const [pageNumber, setPageNumber] = useState('');

  const [nameToSearch, setNameToSearch] = useState('');
  const [stastatusToSearch, setStastatusToSearch] = useState('');
  const [genderToSearch, setGenderToSearch] = useState('');

  useEffect(() => {
    loadCharacters(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${nameToSearch}&status=${stastatusToSearch}&gender=${genderToSearch}`
    );
  }, [pageNumber, stastatusToSearch, nameToSearch, genderToSearch]);

  const loadCharacters = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((charactersList) => {
        setCharacters(charactersList.results);
        setPages(charactersList.info.pages);
      })
      .catch((err) => console.error);
  };

  const loadPage = (event) => {
    setPageNumber(event.target.value);
  };

  const getSearch = (characterSearch) => {
    setNameToSearch(characterSearch.name);
    setStastatusToSearch(characterSearch.status);
    setGenderToSearch(characterSearch.gender);
    setPageNumber('');
  };

  return (
    <>
      <div>
        <TitleBar
          onFormSubmit={(characterSearch) => getSearch(characterSearch)}
        />
      </div>
      <div>
        {characters ? (
          <>
            <CharactersList characters={characters} />
            <ResultsPagination loadPage={loadPage} pages={pages} />
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};

export default CharactersListBox;
