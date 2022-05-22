import React from 'react';
import './NotFound.css';

function NotFound() {
  return (
    <div>
      <h1 id="not-found">Character Not Found</h1>
      <img
        src="not_found.png"
        alt="rick and morty say bad luck this character does not exist"
      />
    </div>
  );
}

export default NotFound;
