import { render} from '@testing-library/react';
import '@testing-library/jest-dom'
import Character from './Character';
import dataList from '../../../mockData';

describe('Character renders information', () => {
    let character;
    const characterObject = dataList.results[0]
    let faves = []
    beforeEach(() => {
        character = render(<Character character={characterObject} favesCharacters={faves}/>)        
    });

    it('should render character information on the page', () => {
        const nameArray = character.getAllByRole('heading');
        const image = character.getByRole('img');
        const status = character.getByLabelText('status');

        expect(nameArray[0].textContent).toEqual('Rick Sanchez');
        expect(image).toHaveAttribute('src', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg');
        expect(image).toHaveAttribute('alt', 'character Rick Sanchez avatar');
        expect(status.textContent).toEqual('Stats: Alive')
    });
});