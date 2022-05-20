import NavBar from './components/NavBar/NavBar';
import TitleBar from './components/TitleBar/TitleBar';

const Faves = ({ favesCharacters }) => {
  return (
    <>
      <NavBar />
      <TitleBar>Favourite Characters</TitleBar>
      {/* <div className='characters'>
        {favesCharacters.map((character) => (
          <Character
            key={character['id']}
            character={character}
            onFaveClick={onFaveClick}
            deleteToFavorite={deleteToFavorite}
            favesCharacters={favesCharacters}
          />
        ))}
      </div> */}
    </>
  );
};

export default Faves;
