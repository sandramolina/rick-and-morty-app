import React from 'react';

const Search = ({ searchCharacter }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <section className='search'>
      <form onSubmit={handleFormSubmit}>
        <select name='status' onChange={handleStatusSelection}>
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
        <input type='submit' value='Search'></input>
      </form>
    </section>
  );
};

export default Search;
