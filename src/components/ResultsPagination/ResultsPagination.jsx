/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import './ResultsPagination.css';

function ResultsPagination({ onPageChange, pages }) {
  const pagesArr = [];
  for (let i = 2; i <= pages; i++) {
    pagesArr.push(
      <li key={i}>
        <button className="btn" onClick={onPageChange} value={i} type="button">
          {i}
        </button>
      </li>,
    );
  }

  return (
    <>
      <h4 id="pages-title">Pages:</h4>
      <nav>
        <ul className="pages-list">
          <li>
            <button onClick={onPageChange} value="" className="btn" type="button">
              1
            </button>
          </li>
          {pagesArr}
        </ul>
      </nav>
    </>
  );
}

export default ResultsPagination;
