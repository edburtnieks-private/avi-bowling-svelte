import { formatDateAndTime } from '../../../../src/components/ReservationForm/index.svelte';

// Set today's date
const now = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
  new Date().getHours() + 1
);

describe('start time', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy=reservation-form] form [data-cy=date-and-time-dropdown]')
      .within(() => {
        // Aliases
        cy.get('[data-cy=dropdown-toggle-input-text]')
          .as('date-and-time-dropdown-toggle-input-text');

        // Open date and time dropdown
        cy.get('[data-cy=dropdown-toggle-button]')
          .click();

        // Date and time dropdown aliases
        cy.get('[data-cy=start-time-select] [data-cy=label]')
          .as('start-time-label');
        cy.get('[data-cy=start-time-select] [data-cy=select]')
          .as('start-time-select');
      });
  });

  it('should show start time select with label', () => {
    // Input
    cy.get('@start-time-select')
      .should('exist')
      .and('be.visible')
      .and('have.value', `${now.getHours()}:00`);

    // Label
    cy.get('@start-time-label')
      .should('have.text', 'Start time');
  });

  it('should change start time by choosing different option from select input', () => {
    // Select new start time
    cy.get('@start-time-select')
      .select('17:00');
    cy.get('@start-time-select')
      .should('have.value', '17:00');

    // Format date and time string
    const dateTimeText = formatDateAndTime(now, '17:00');

    // Assert that date and time text is correctly formatted
    cy.get('@date-and-time-dropdown-toggle-input-text')
      .should('have.text', dateTimeText);
  });
});
