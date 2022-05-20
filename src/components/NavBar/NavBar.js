import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='navigation'>
      <Link to='/'>Home</Link> | <Link to='faves'>Favourites</Link>
    </nav>
  );
};

export default NavBar;
