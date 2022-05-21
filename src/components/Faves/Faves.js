import Character from '../Character/Character';

const Faves = ({ favesCharacters, onFaveClick, deleteToFavorite }) => {
  return (
    <div className='characters'>
      {favesCharacters.map((character) => (
        <Character
          key={character['id']}
          character={character}
          onFaveClick={onFaveClick}
          deleteToFavorite={deleteToFavorite}
          favesCharacters={favesCharacters}
        />
      ))}
    </div>
  );
};

export default Faves;
