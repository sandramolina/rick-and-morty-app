import React, { useState } from 'react';
import './Search.css';

// eslint-disable-next-line react/prop-types
function Search({ onFormSubmit }) {
  const [searchText, setSearchText] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  const handleSearchInput = (event) => setSearchText(event.target.value);
  const handleStatusSelection = (event) => setStatus(event.target.value);
  const handleGenderSelection = (event) => setGender(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const nameToSearch = searchText;
    const statusToSearch = status;
    const genderToSearch = gender;

    onFormSubmit({
      name: nameToSearch,
      status: statusToSearch,
      gender: genderToSearch,
    });
  };
  return (
    <section className="search">
      <form onSubmit={handleFormSubmit} className="search-form">
        <select
          name="status"
          onChange={handleStatusSelection}
          className="selection"
        >
          <option value="" defaultValue>
            -Chose a Status-
          </option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select
          name="gender"
          onChange={handleGenderSelection}
          className="selection"
        >
          <option value="" defaultValue>
            -Chose a Gender-
          </option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

        <input
          type="text"
          className="form-control"
          placeholder="Search character name"
          name="inputName"
          value={searchText}
          onChange={handleSearchInput}
        />
        <input type="submit" value="Search" className="search-btn" />
      </form>
    </section>
  );
}

export default Search;
