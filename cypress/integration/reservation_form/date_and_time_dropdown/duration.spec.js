describe('duration', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy=reservation-form] form [data-cy=date-and-time-dropdown]')
      .within(() => {
        // Open date and time dropdown
        cy.get('[data-cy=dropdown-toggle-button]')
          .click();

        // Date and time dropdown aliases
        cy.get('[data-cy=duration-increment-input] [data-cy=label]')
          .as('duration-label');
        cy.get('[data-cy=duration-increment-input] [data-cy=input]')
          .as('duration-input');
        cy.get('[data-cy=duration-increment-input] [data-cy=decrement-button]')
          .as('duration-decrement-button');
        cy.get('[data-cy=duration-increment-input] [data-cy=increment-button]')
          .as('duration-increment-button');
      });
  });

  it('should show duration input with label', () => {
    // Input
    cy.get('@duration-input')
      .should('exist')
      .and('be.visible')
      .and('have.value', '1h');

    // Label
    cy.get('@duration-label')
      .should('have.text', 'Duration');

    // Assert that duration can't be set less than 1h
    cy.get('@duration-decrement-button')
      .should('be.disabled')
      .and('have.class', 'disabled-value');
  });

  it('should change duration value by increment and decrement buttons', () => {
    // Set duration to maximum value - 4h
    cy.get('@duration-increment-button')
      .click()
      .click()
      .click();

    // Assert that duration is 4h
    cy.get('@duration-input')
      .should('have.value', '4h');

    // Assert that duration can be set less than 4h
    cy.get('@duration-decrement-button')
      .should('not.be.disabled')
      .and('not.have.class', 'disabled-value');

    // Assert that duration can't be set more than 4h
    cy.get('@duration-increment-button')
      .should('be.disabled')
      .and('have.class', 'disabled-value');

    // Set duration to 2h
    cy.get('@duration-decrement-button')
      .click()
      .click();
    
    // Assert that duration is 2h
    cy.get('@duration-input')
      .should('have.value', '2h');
  });
});
