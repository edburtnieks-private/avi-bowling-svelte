import { formatDateAndTime } from '../../../src/components/ReservationForm/index.svelte';

// Set today's date
const now = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
  new Date().getHours() + 1
);

describe('date and time dropdown', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    // Aliases
    cy.get('[data-cy=reservation-form] form [data-cy=date-and-time-dropdown]')
      .as('date-and-time-dropdown');

    // Date and time dropdown aliases
    cy.get('@date-and-time-dropdown')
      .within(() => {
        cy.get('[data-cy=label]')
          .as('date-and-time-input-label');
        cy.get('[data-cy=dropdown-toggle-button]')
          .as('date-and-time-dropdown-toggle-button');
        cy.get('[data-cy=dropdown-toggle-input-text]')
          .as('date-and-time-dropdown-toggle-input-text');
        cy.get('[data-cy=dropdown-toggle-button] [data-cy=caret-icon]')
          .as('date-and-time-dropdown-toggle-button-caret-icon');
      });
  });

  it('should show date and time dropdown', () => {
    cy.get('@date-and-time-dropdown-toggle-button')
      .should('exist')
      .and('be.visible');

    // Label
    cy.get('@date-and-time-input-label')
      .should('have.text', 'Date and Time');

    // Default value
    // Format date and time string
    const dateTimeText = formatDateAndTime(now, now.getHours());
  
    // Assert that date and time text is correctly formatted
    cy.get('@date-and-time-dropdown-toggle-input-text')
      .should('have.text', dateTimeText);

    // Assert that caret icon is pointing down
    cy.get('@date-and-time-dropdown-toggle-button-caret-icon')
      .should('not.have.class', 'active');

    cy.get('@date-and-time-dropdown')
      .within(() => {
        // Assert that date and time dropdown is closed
        cy.get('[data-cy=dropdown-content]')
          .should('not.exist')
          .and('not.be.visible');
      });
  });

  it('should open and close date and time dropdown', () => {
    cy.get('@date-and-time-dropdown')
      .within(() => {
        // Open date and time dropdown
        cy.get('@date-and-time-dropdown-toggle-button')
          .click();
    
        // Assert that date and time dropdown is open
        cy.get('[data-cy=dropdown-content]')
          .should('exist')
          .and('be.visible');
    
        // Assert that caret icon is pointing up
        cy.get('@date-and-time-dropdown-toggle-button-caret-icon')
          .should('have.class', 'active');
    
        // Close date and time dropdown with dropdown toggle button
        cy.get('@date-and-time-dropdown-toggle-button')
          .click();
    
        // Assert that date and time dropdown is closed
        cy.get('[data-cy=dropdown-content]')
          .should('not.exist')
          .and('not.be.visible');

        // Assert that caret icon is pointing down
        cy.get('@date-and-time-dropdown-toggle-button-caret-icon')
          .should('not.have.class', 'active');

        // Open date and time dropdown
        cy.get('@date-and-time-dropdown-toggle-button')
          .click();

        // Close date and time dropdown with dropdown close button
        cy.get('[data-cy=dropdown-close-button]')
          .click();

        // Assert that date and time dropdown is closed
        cy.get('[data-cy=dropdown-content]')
          .should('not.exist')
          .and('not.be.visible');

        // Assert that caret icon is pointing down
        cy.get('@date-and-time-dropdown-toggle-button-caret-icon')
          .should('not.have.class', 'active');
      });
  });
});
