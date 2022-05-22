import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHouse } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="navigation">
      <Link to="/">
        <i className="home-icon">
          <FontAwesomeIcon icon={faHouse} />
        </i>
      </Link>
      {' '}
      |
      {' '}
      <Link to="faves">
        Faves
        <i className="star-icon">
          <FontAwesomeIcon icon={faStar} />
        </i>
      </Link>
    </nav>
  );
}

export default NavBar;
