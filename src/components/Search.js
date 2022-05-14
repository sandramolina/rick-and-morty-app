import React, { useState } from 'react';

const Search = ({ onFormSubmit }) => {
  const [searchText, setSearchText] = useState('');
  const [status, setStatus] = useState('');

  const handleSearchInput = (event) => setSearchText(event.target.value);
  const handleStatusSelection = (event) => setStatus(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const nameToSearch = searchText;
    const statusToSearch = status;
    onFormSubmit({ name: nameToSearch, status: statusToSearch });
    setSearchText('');
    setStatus('');
  };
  return (
    <section className='search'>
      <form onSubmit={handleFormSubmit} className='search-form'>
        <select
          name='status'
          onChange={handleStatusSelection}
          className='selection'
        >
          <option value='' defaultValue>
            -Chose a Status-
          </option>
          <option value='alive'>Alive</option>
          <option value='dead'>Dead</option>
          <option value='unknown'>Unknown</option>
        </select>

        <input
          type='text'
          className='form-control'
          placeholder='Search character name'
          name='inputName'
          value={searchText}
          onChange={handleSearchInput}
          autoFocus
        />
        <input type='submit' value='Search' className='search-btn'></input>
      </form>
    </section>
  );
};

export default Search;
