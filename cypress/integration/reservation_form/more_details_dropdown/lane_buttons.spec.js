describe('lane buttons', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy=reservation-form] form')
      .within(() => {
        // Aliases
        cy.get('[data-cy=lane-count-increment-input] [data-cy=decrement-button]')
          .as('lane-count-decrement-button');
        cy.get('[data-cy=lane-count-increment-input] [data-cy=increment-button]')
          .as('lane-count-increment-button');

        cy.get('[data-cy=more-details-dropdown]')
          .within(() => {
            // Open more details dropdown
            cy.get('[data-cy=dropdown-toggle-button]')
              .click();
    
            // More details dropdown aliases
            cy.get('[data-cy=lane-button-label]')
              .as('lane-button-label');
            cy.get('[data-cy=lane-button]')
              .as('lane-button');
          });
      });
  });

  it('should show lane buttons with label', () => {
    cy.get('@lane-button')
      .should('have.length', 10);

    // Label
    cy.get('@lane-button-label')
      .should('have.text', 'Lane numbers');
  });

  it('should select and unselect lane', () => {
    // Select lane 1
    cy.get('@lane-button')
      .eq(0)
      .click();

    // Assert that lane 1 is selected and selectable
    cy.get('@lane-button')
      .eq(0)
      .should('have.class', 'active')
      .and('not.be.disabled');

    // Assert that all other lanes are not selectable
    cy.get('@lane-button')
      .eq(1)
      .should('be.disabled');
    cy.get('@lane-button')
      .eq(2)
      .should('be.disabled');
    cy.get('@lane-button')
      .eq(3)
      .should('be.disabled');
    cy.get('@lane-button')
      .eq(4)
      .should('be.disabled');
    cy.get('@lane-button')
      .eq(5)
      .should('be.disabled');
    cy.get('@lane-button')
      .eq(6)
      .should('be.disabled');
    cy.get('@lane-button')
      .eq(7)
      .should('be.disabled');
    cy.get('@lane-button')
      .eq(8)
      .should('be.disabled');
    cy.get('@lane-button')
      .eq(9)
      .should('be.disabled');
    
    // Unselect lane 1
    cy.get('@lane-button')
      .eq(0)
      .click();

    // Assert that lane 1 is unselected and selectable
    cy.get('@lane-button')
      .eq(0)
      .should('not.have.class', 'active')
      .and('not.be.disabled');

    // Assert that all lanes are selectable
    cy.get('@lane-button')
      .should('not.be.disabled');
  });

  it('should dynamically remove or add lanes depending on lane count', () => {
    // Set lane count to 3
    cy.get('@lane-count-increment-button')
      .click()
      .click();

    // Select lanes 2, 3 and 6
    cy.get('@lane-button')
      .eq(1)
      .click();
    cy.get('@lane-button')
      .eq(2)
      .click();
    cy.get('@lane-button')
      .eq(5)
      .click();

    // Set lane count to 1
    cy.get('@lane-count-decrement-button')
      .click()
      .click();

    // Assert that lane 2 stays selected and selectable
    cy.get('@lane-button')
      .eq(1)
      .should('have.class', 'active')
      .and('not.be.disabled');

    // Assert that lanes 3 and 6 are unselected and unselectable
    cy.get('@lane-button')
      .eq(2)
      .should('not.have.class', 'active')
      .and('be.disabled');
    cy.get('@lane-button')
      .eq(5)
      .should('not.have.class', 'active')
      .and('be.disabled');

    // Set lane count to 3
    cy.get('@lane-count-increment-button')
      .click()
      .click();

    // Assert that lanes 3 and 6 are selected and selectable
    cy.get('@lane-button')
      .eq(2)
      .should('have.class', 'active')
      .and('not.be.disabled');
    cy.get('@lane-button')
      .eq(5)
      .should('have.class', 'active')
      .and('not.be.disabled');
  });

  it('should make lane buttons selectable and unselectable on lane count change', () => {
    // Set lane count to 3
    cy.get('@lane-count-increment-button')
      .click()
      .click();

    // Select lanes 1 and 2
    cy.get('@lane-button')
      .eq(0)
      .click();
    cy.get('@lane-button')
      .eq(1)
      .click();

    // Assert that all lanes are selectable
    cy.get('@lane-button')
      .should('not.be.disabled');

    // Set lane count to 2
    cy.get('@lane-count-decrement-button')
      .click();

    // Assert that lanes 1 and 2 stay selected and selectable
    cy.get('@lane-button')
      .eq(0)
      .should('have.class', 'active')
      .and('not.be.disabled');
    cy.get('@lane-button')
      .eq(1)
      .should('have.class', 'active')
      .and('not.be.disabled');

    // Assert that all other lanes are not selectable
    cy.get('@lane-button')
      .eq(2)
      .should('be.disabled');
    cy.get('@lane-button')
      .eq(3)
      .should('be.disabled');
    cy.get('@lane-button')
      .eq(4)
      .should('be.disabled');
    cy.get('@lane-button')
      .eq(5)
      .should('be.disabled');
    cy.get('@lane-button')
      .eq(6)
      .should('be.disabled');
    cy.get('@lane-button')
      .eq(7)
      .should('be.disabled');
    cy.get('@lane-button')
      .eq(8)
      .should('be.disabled');
    cy.get('@lane-button')
      .eq(9)
      .should('be.disabled');

    // Set lane count to 3
    cy.get('@lane-count-increment-button')
      .click();

    // Assert that all lanes are selectable
    cy.get('@lane-button')
      .should('not.be.disabled');
  });
});
