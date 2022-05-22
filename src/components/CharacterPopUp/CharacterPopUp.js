import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './CharacterPopUp.css';
import '../Character/Character.css';

function CharacterPopUp({ trigger, characterPopedUp, closePopUp }) {
  const { name, image, status, species, gender, origin, location } =
    characterPopedUp;

  const handlePopUpClose = () => closePopUp();
  return trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <div className='c-info'>
          <img
            src={image}
            className='avatar'
            alt={`character ${name} avatar`}
          ></img>
          <div>
            <h2>{name}</h2>
            <ul className='character-cards-list'>
              <li>
                <span
                  className={
                    status === 'Alive'
                      ? 'status-icon-alive'
                      : status === 'Dead'
                      ? 'status-icon-dead'
                      : 'status-icon-unknown'
                  }
                ></span>
                <strong>Stats:</strong> {status}
              </li>
              <li>
                <strong>Species:</strong> {species}
              </li>
              <li>
                <strong>Gender:</strong> {gender}
              </li>
              <li>
                <strong>Origin:</strong> {origin.name}
              </li>
              <li>
                <strong>Last known location:</strong> {location.name}
              </li>
            </ul>
          </div>
        </div>
        <button className='info-btn' onClick={handlePopUpClose}>
          <i className='more-info'>
            <FontAwesomeIcon icon={faCircleXmark} />
          </i>
        </button>
      </div>
    </div>
  ) : (
    ''
  );
}

export default CharacterPopUp;
