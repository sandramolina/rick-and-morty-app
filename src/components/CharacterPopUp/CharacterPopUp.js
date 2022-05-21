import './CharacterPopUp.css';

function CharacterPopUp({ trigger, characterPopedUp, closePopUp }) {
  const { name, image } = characterPopedUp;
  const handlePopUpClose = () => closePopUp();
  return trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <img
          src={image}
          className='avatar'
          alt={`character ${name} avatar`}
        ></img>
        <button className='close-btn' onClick={handlePopUpClose}>
          Back to page
        </button>
      </div>
    </div>
  ) : (
    ''
  );
}

export default CharacterPopUp;
