/* eslint-disable no-undef */

describe('App', () => {
  beforeEach(() => cy.visit('http://localhost:3000'));

  it('Loads the app', () => {
    const title = cy.get('h1');
    title.should('have.text', 'Characters Grid');
  });

  it('Loads the characters', () => {
    const cName = cy.get('h3');
    cName.should('contain', 'Rick Sanchez');
  });
});
