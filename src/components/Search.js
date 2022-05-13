import React from 'react';

const Search = ({ searchText, handleSearchInput }) => {
  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={searchText}
          onChange={handleSearchInput}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
