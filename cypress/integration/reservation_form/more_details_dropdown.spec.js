describe('more details dropdown', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    // Aliases
    cy.get('[data-cy=reservation-form] form [data-cy=more-details-dropdown]')
      .as('more-details-dropdown');

    // More details dropdown aliases
    cy.get('@more-details-dropdown')
      .within(() => {
        cy.get('[data-cy=dropdown-toggle-text]')
          .as('more-details-dropdown-toggle-text');
        cy.get('[data-cy=dropdown-toggle-button]')
          .as('more-details-dropdown-toggle-button');
        cy.get('[data-cy=dropdown-toggle-button] [data-cy=caret-icon]')
          .as('more-details-dropdown-toggle-button-caret-icon');
      });
  });

  it('should show more details dropdown', () => {
    cy.get('@more-details-dropdown-toggle-button')
      .should('exist')
      .and('be.visible');

    // Dropdown toggle text
    cy.get('@more-details-dropdown-toggle-text')
      .should('have.text', 'More details');

    // Assert that caret icon is pointing down
    cy.get('@more-details-dropdown-toggle-button-caret-icon')
      .should('not.have.class', 'active');

    cy.get('@more-details-dropdown')
      .within(() => {
        // Assert that more details dropdown is closed
        cy.get('[data-cy=dropdown-content]')
          .should('not.exist')
          .and('not.be.visible');
      });
  });

  it('should open and close more details dropdown', () => {
    cy.get('@more-details-dropdown')
      .within(() => {
        // Open more details dropdown
        cy.get('@more-details-dropdown-toggle-button')
          .click();
    
        // Assert that more details dropdown is open
        cy.get('[data-cy=dropdown-content]')
          .should('exist')
          .and('be.visible');
    
        // Assert that caret icon is pointing up
        cy.get('@more-details-dropdown-toggle-button-caret-icon')
          .should('have.class', 'active');
    
        // Close more details dropdown with dropdown toggle button
        cy.get('@more-details-dropdown-toggle-button')
          .click();
    
        // Assert that more details dropdown is closed
        cy.get('[data-cy=dropdown-content]')
          .should('not.exist')
          .and('not.be.visible');

        // Assert that caret icon is pointing down
        cy.get('@more-details-dropdown-toggle-button-caret-icon')
          .should('not.have.class', 'active');

        // Open more details dropdown
        cy.get('@more-details-dropdown-toggle-button')
          .click();

        // Close more details dropdown with dropdown close button
        cy.get('[data-cy=dropdown-close-button]')
          .click();

        // Assert that more details dropdown is closed
        cy.get('[data-cy=dropdown-content]')
          .should('not.exist')
          .and('not.be.visible');

        // Assert that caret icon is pointing down
        cy.get('@more-details-dropdown-toggle-button-caret-icon')
          .should('not.have.class', 'active');
      });
  });
});
