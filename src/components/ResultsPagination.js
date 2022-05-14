import React from 'react';

const ResultsPagination = ({ loadPage, pages }) => {
  let pagesArr = [];
  for (let i = 2; i <= pages; i++) {
    pagesArr.push(
      <li key={i}>
        <button className='btn' onClick={loadPage} value={i}>
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
            <button onClick={loadPage} value='' className='btn'>
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
