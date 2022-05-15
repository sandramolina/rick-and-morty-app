import React from 'react';

const ResultsPagination = ({ onPageChange, pages }) => {
  let pagesArr = [];
  for (let i = 2; i <= pages; i++) {
    pagesArr.push(
      <li key={i}>
        <button className='btn' onClick={onPageChange} value={i}>
          {i}
        </button>
      </li>
    );
  }

  return (
    <>
      <h4 id='pages-title'>Pages:</h4>
      <nav>
        <ul className='pages-list'>
          <li>
            <button onClick={onPageChange} value='' className='btn'>
              1
            </button>
          </li>
          {pagesArr}
        </ul>
      </nav>
    </>
  );
};

export default ResultsPagination;
