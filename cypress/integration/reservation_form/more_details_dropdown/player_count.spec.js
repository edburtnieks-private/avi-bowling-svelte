describe('player count', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy=reservation-form] form [data-cy=more-details-dropdown]')
      .within(() => {
        // Open more details dropdown
        cy.get('[data-cy=dropdown-toggle-button]')
          .click();

        // More details dropdown aliases
        cy.get('[data-cy=player-count-increment-input] [data-cy=label]')
          .as('player-count-label');
        cy.get('[data-cy=player-count-increment-input] [data-cy=input]')
          .as('player-count-input');
        cy.get('[data-cy=player-count-increment-input] [data-cy=decrement-button]')
          .as('player-count-decrement-button');
        cy.get('[data-cy=player-count-increment-input] [data-cy=increment-button]')
          .as('player-count-increment-button');
      });
  });

  it('should show player count input with label', () => {
    // Input
    cy.get('@player-count-input')
      .should('exist')
      .and('be.visible')
      .and('have.value', '2');

    // Label
    cy.get('@player-count-label')
      .should('have.text', 'Players');
  });

  it('should change player count value by increment and decrement buttons', () => {
    // Set player count to minimum value - 1
    cy.get('@player-count-decrement-button')
      .click();

    // Assert that player count is 1
    cy.get('@player-count-input')
      .should('have.value', '1');

    // Assert that player count can't be set less than 1
    cy.get('@player-count-decrement-button')
      .should('be.disabled')
      .and('have.class', 'disabled-value');

    // Set player count to maximum value - 6
    cy.get('@player-count-increment-button')
      .click()
      .click()
      .click()
      .click()
      .click();
    
    // Assert that player count is 6
    cy.get('@player-count-input')
      .should('have.value', '6');

    // Assert that player count can't be set more than 6
    cy.get('@player-count-increment-button')
      .should('be.disabled')
      .and('have.class', 'disabled-value');
  });
});
