import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CharactersGrid from '../components/CharactersGrid/CharactersGrid';
import NotFound from '../components/NotFound/NotFound';
import ResultsPagination from '../components/ResultsPagination/ResultsPagination';
import TitleBar from '../components/TitleBar/TitleBar';
import Search from '../components/Search/Search';
import CharacterPopUp from '../components/CharacterPopUp/CharacterPopUp';
import NavBar from '../components/NavBar/NavBar';
import Faves from '../components/Faves/Faves';

const CharactersGridBox = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(0);
  const [pageNumber, setPageNumber] = useState('');

  const [nameToSearch, setNameToSearch] = useState('');
  const [statusToSearch, setStatusToSearch] = useState('');
  const [genderToSearch, setGenderToSearch] = useState('');

  const [favesCharacters, setFavesCharacters] = useState([]);

  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    fetchCharacters(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${nameToSearch}&status=${statusToSearch}&gender=${genderToSearch}`
    );
  }, [pageNumber, statusToSearch, nameToSearch, genderToSearch]);

  const fetchCharacters = async (url) => {
    const res = await fetch(url);
    // if (!res.ok) {
    //   const message = `An error has occured: ${res.status}`;
    //   throw new Error(message);
    // }
    const charactersGrid = await res.json();
    setCharacters(charactersGrid.results);
    setPages(charactersGrid.info.pages);
  };
  // fetch().catch((err) => err.message);

  const onPageChange = (event) => {
    setPageNumber(event.target.value);
  };

  const onSearch = (characterSearch) => {
    setNameToSearch(characterSearch.name);
    setStatusToSearch(characterSearch.status);
    setGenderToSearch(characterSearch.gender);
    setPageNumber('');
  };

  const onFaveClick = (favedCharacter) => {
    const copyArray = [...favesCharacters];
    const isOnArray = copyArray.some(
      (character) => character.id === favedCharacter.id
    );
    if (!isOnArray) {
      copyArray.push(favedCharacter);
    }
    setFavesCharacters(copyArray);
  };

  const deleteToFavorite = (characterToDelete) => {
    const temp = favesCharacters.filter((c) => c.id !== characterToDelete.id);
    setFavesCharacters(temp);
  };

  const onPlusInfoClick = () => setPopUp(true);

  return (
    <>
      <div>
        <TitleBar>Characters Grid</TitleBar>
        <Search onFormSubmit={onSearch} />
      </div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            index
            element={
              <>
                {characters ? (
                  <>
                    <CharactersGrid
                      characters={characters}
                      onFaveClick={onFaveClick}
                      deleteToFavorite={deleteToFavorite}
                      favesCharacters={favesCharacters}
                      onPlusInfoClick={onPlusInfoClick}
                    />
                    <CharacterPopUp trigger={popUp}>POPUP</CharacterPopUp>
                    <ResultsPagination
                      onPageChange={onPageChange}
                      pages={pages}
                    />
                  </>
                ) : (
                  <NotFound />
                )}
              </>
            }
          />
          <Route
            path='faves'
            element={
              <Faves
                favesCharacters={favesCharacters}
                onFaveClick={onFaveClick}
                deleteToFavorite={deleteToFavorite}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default CharactersGridBox;
