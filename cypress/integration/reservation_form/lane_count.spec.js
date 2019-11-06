describe('lane count', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy=reservation-form] form')
      .within(() => {
        // Aliases
        cy.get('[data-cy=lane-count-increment-input] [data-cy=label]')
          .as('lane-count-label');
        cy.get('[data-cy=lane-count-increment-input] [data-cy=input]')
          .as('lane-count-input');
        cy.get('[data-cy=lane-count-increment-input] [data-cy=decrement-button]')
          .as('lane-count-decrement-button');
        cy.get('[data-cy=lane-count-increment-input] [data-cy=increment-button]')
          .as('lane-count-increment-button');
      });
  });

  it('should show lane count input with label', () => {
    // Input
    cy.get('@lane-count-input')
      .should('exist')
      .and('be.visible')
      .and('have.value', '1');

    // Label
    cy.get('@lane-count-label')
      .should('have.text', 'Lane count');

    // Assert that lane count can't be set less than 1
    cy.get('@lane-count-decrement-button')
      .should('be.disabled')
      .and('have.class', 'disabled-value');
  });

  it('should change lane count value by increment and decrement buttons', () => {
    // Set lane count to maximum value - 10
    cy.get('@lane-count-increment-button')
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click();

    // Assert that lane count is 10
    cy.get('@lane-count-input')
      .should('have.value', '10');

    // Assert that lane count can be set less than 10
    cy.get('@lane-count-decrement-button')
      .should('not.be.disabled')
      .and('not.have.class', 'disabled-value');

    // Assert that lane count can't be set more than 10
    cy.get('@lane-count-increment-button')
      .should('be.disabled')
      .and('have.class', 'disabled-value');

    // Set lane count to 8
    cy.get('@lane-count-decrement-button')
      .click()
      .click();

    // Assert that lane count is 8
    cy.get('@lane-count-input')
      .should('have.value', '8');
  });
});
