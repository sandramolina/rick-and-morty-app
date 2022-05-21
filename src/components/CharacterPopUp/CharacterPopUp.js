import './CharacterPopUp.css';

function CharacterPopUp({ trigger, children }) {
  return trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        {children}
        <button className='close-btn'>Back to page</button>
      </div>
    </div>
  ) : (
    ''
  );
}

export default CharacterPopUp;
