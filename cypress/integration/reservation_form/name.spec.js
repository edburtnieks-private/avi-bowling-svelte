describe('name', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy=reservation-form] form')
      .within(() => {
        // Aliases
        cy.get('[data-cy=name-input] [data-cy=label]')
          .as('name-label');
        cy.get('[data-cy=name-input] [data-cy=input]')
          .as('name-input');
      });
  });

  it('should show name input with label', () => {
    // Input
    cy.get('@name-input')
      .should('exist')
      .and('be.visible')
      .and('be.empty');

    // Label
    cy.get('@name-label')
      .should('have.text', 'Name');
  });

  it('should type name', () => {
    cy.get('@name-input')
      .type('Edgar Burtnieks')
      .should('have.value', 'Edgar Burtnieks');
  });
});
