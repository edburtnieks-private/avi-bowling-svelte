describe('contact', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy=reservation-form] form')
      .within(() => {
        // Aliases
        cy.get('[data-cy=contact-input] [data-cy=label]')
          .as('contact-label');
        cy.get('[data-cy=contact-input] [data-cy=input]')
          .as('contact-input');
      });
  });

  it('should show contact input with label', () => {
    // Input
    cy.get('@contact-input')
      .should('exist')
      .and('be.visible')
      .and('be.empty');

    // Label
    cy.get('@contact-label')
      .should('have.text', 'Phone or Email');
  });

  it('should type contact', () => {
    cy.get('@contact-input')
      .type('26391622')
      .should('have.value', '26391622');
  });
});
