describe('shoe count', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy=reservation-form] form [data-cy=more-details-dropdown]')
      .within(() => {
        // Open more details dropdown
        cy.get('[data-cy=dropdown-toggle-button]')
          .click();

        // More details dropdown aliases
        cy.get('[data-cy=shoe-count-increment-input] [data-cy=shoe-checkbox] [data-cy=checkbox-label]')
          .as('shoe-checkbox-label');
        cy.get('[data-cy=shoe-count-increment-input] [data-cy=shoe-checkbox] [data-cy=checkbox-input]')
          .as('shoe-checkbox');
        cy.get('[data-cy=shoe-count-increment-input] [data-cy=input-wrapper]')
          .as('shoe-count-input-wrapper');
        cy.get('[data-cy=shoe-count-increment-input] [data-cy=input]')
          .as('shoe-count-input');
        cy.get('[data-cy=shoe-count-increment-input] [data-cy=decrement-button]')
          .as('shoe-count-decrement-button');
        cy.get('[data-cy=shoe-count-increment-input] [data-cy=increment-button]')
          .as('shoe-count-increment-button');
        cy.get('[data-cy=player-count-increment-input] [data-cy=decrement-button]')
          .as('player-count-decrement-button');
        cy.get('[data-cy=player-count-increment-input] [data-cy=increment-button]')
          .as('player-count-increment-button');
      });
  });

  it('should show shoe count input with custom label', () => {
    // Input
    cy.get('@shoe-count-input')
      .should('exist')
      .and('be.visible')
      .and('have.value', '2');

    // Checkbox label
    cy.get('@shoe-checkbox-label')
      .should('have.text', 'Shoes');

    // Default shoe checkbox value
    cy.get('@shoe-checkbox')
      .should('be.checked');

    // Assert that shoe count can't be set more than 2
    cy.get('@shoe-count-increment-button')
      .should('be.disabled')
      .and('have.class', 'disabled-value');
  });

  it('should change shoe count value by increment and decrement buttons', () => {
    // Set shoe count to minimum value - 1
    cy.get('@shoe-count-decrement-button')
      .click();

    // Assert that shoe count is 1
    cy.get('@shoe-count-input')
      .should('have.value', '1');

    // Assert that shoe count can't be set less than 1
    cy.get('@shoe-count-decrement-button')
      .should('be.disabled')
      .and('have.class', 'disabled-value');

    // Set shoe count to maximum value - 2
    cy.get('@shoe-count-increment-button')
      .click();
    
    // Assert that shoe count is 2
    cy.get('@shoe-count-input')
      .should('have.value', '2');

    // Assert that shoe count can't be set more than 2
    cy.get('@shoe-count-increment-button')
      .should('be.disabled')
      .and('have.class', 'disabled-value');
  });

  it('should dynamically change shoe count value depending on player count value', () => {
    // Set player count to 1
    cy.get('@player-count-decrement-button')
      .click();

    // Assert that shoe count is same as player count - 1
    cy.get('@shoe-count-input')
      .should('have.value', '1');

    // Assert that shoe count can' be set less or more than 1
    cy.get('@shoe-count-decrement-button')
      .should('be.disabled')
      .and('have.class', 'disabled-value');
    cy.get('@shoe-count-increment-button')
      .should('be.disabled')
      .and('have.class', 'disabled-value');

    // Set player count to maximum value - 6
    cy.get('@player-count-increment-button')
      .click()
      .click()
      .click()
      .click()
      .click();

    // Assert that shoe count is same as player count 6
    cy.get('@shoe-count-input')
      .should('have.value', '6');

    // Assert that shoe count can't be set more than 6
    cy.get('@shoe-count-increment-button')
      .should('be.disabled')
      .and('have.class', 'disabled-value');

    // Set shoe count to 4
    cy.get('@shoe-count-decrement-button')
      .click()
      .click();

    // Set player count to 5
    cy.get('@player-count-decrement-button')
      .click();

    // Assert that shoe count is still 4
    cy.get('@shoe-count-input')
      .should('have.value', '4');

    // Set player count to 6
    cy.get('@player-count-increment-button')
      .click();

    // Assert that shoe count is still 4
    cy.get('@shoe-count-input')
      .should('have.value', '4');
  });

  it('should disable and enable shoe count input', () => {
    // Remove shoes
    cy.get('@shoe-checkbox')
      .uncheck({ force: true });
    cy.get('@shoe-checkbox')
      .should('not.be.checked');

    // Assert that all shoe count inputs are disabled
    cy.get('@shoe-count-input-wrapper')
      .should('have.class', 'increment-input-wrapper-disabled');
    cy.get('@shoe-count-input')
      .should('have.class', 'increment-input-disabled');
    cy.get('@shoe-count-decrement-button')
      .should('be.disabled')
      .and('have.class', 'disabled-input');
    cy.get('@shoe-count-increment-button')
      .should('be.disabled')
      .and('have.class', 'disabled-input');

    // Add back shoes
    cy.get('@shoe-checkbox')
      .check({ force: true });
    cy.get('@shoe-checkbox')
      .should('be.checked');

    // Assert that all shoe count inputs are enabled
    cy.get('@shoe-count-input-wrapper')
      .should('not.have.class', 'increment-input-wrapper-disabled');
    cy.get('@shoe-count-input')
      .should('not.have.class', 'increment-input-disabled');
    cy.get('@shoe-count-decrement-button')
      .should('not.be.disabled')
      .and('not.have.class', 'disabled-input')
      .and('not.have.class', 'disabled-value');
    cy.get('@shoe-count-increment-button')
      .should('be.disabled')
      .and('not.have.class', 'disabled-input')
      .and('have.class', 'disabled-value');
  });
});
