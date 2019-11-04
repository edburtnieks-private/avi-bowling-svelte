import { formatDateAndTime } from '../../../../src/components/ReservationForm/index.svelte';
import { formatMonthAndYear } from '../../../../src/components/Inputs/Datepicker/index.svelte';

// Set today's date
const now = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
);

describe('datepicker', () => {
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
        cy.get('[data-cy=datepicker]')
          .as('datepicker');
        cy.get('[data-cy=previous-month-button]')
          .as('previous-month-button');
        cy.get('[data-cy=next-month-button]')
          .as('next-month-button');
        cy.get('[data-cy=month-year]')
          .as('month-year');
        cy.get('[data-cy=date-button]')
          .as('date-button');
      });
  });

  it('should show datepicker', () => {
    cy.get('@datepicker')
      .should('exist')
      .and('be.visible');

    // Assert that can't go to previous month
    cy.get('@previous-month-button')
      .should('be.disabled');

    // Assert that can't select past dates
    cy.get('@date-button')
      .each($element => {
        cy.wrap($element)
          .invoke('val')
          .then(value => {
            if (Date.parse(value) < now) {
              cy.wrap($element)
                .should('be.disabled');
            } else {
              cy.wrap($element)
                .should('not.be.disabled');
            }
          })
      });

    // Assert that todays date is selected
    cy.get('@date-button')
      .eq(now.getDate() - 1)
      .should('have.class', 'active');
  });

  it('should change month by next and previous month buttons', () => {
    // Go to next month
    cy.get('@next-month-button')
      .click();

    // Assert that can go to previous month
    cy.get('@previous-month-button')
      .should('not.be.disabled');

    // Set the new date
    const nextMonthDate = new Date(now.setMonth(now.getMonth() + 1));

    // Format date and time string
    const nextMonthDateTimeText = formatDateAndTime(nextMonthDate, '12:00');

    // Assert that date and time text is correctly formatted
    cy.get('@date-and-time-dropdown-toggle-input-text')
      .should('have.text', nextMonthDateTimeText);

    // Format month and year string
    const nextMonthAndYearText = formatMonthAndYear(nextMonthDate);

    // Assert that month and year text is correctly formatted
    cy.get('@month-year')
      .should('have.text', nextMonthAndYearText);

    // Go to previous month
    cy.get('@previous-month-button')
      .click();

    // Assert that can't go to previous month
    cy.get('@previous-month-button')
      .should('be.disabled');

    // Set the new date
    const previousMonthDate = new Date(now.setMonth(now.getMonth() - 1));

    // Format date and time string
    const previousMonthDateTimeText = formatDateAndTime(previousMonthDate, '12:00');

    // Assert that date and time text is correctly formatted
    cy.get('@date-and-time-dropdown-toggle-input-text')
      .should('have.text', previousMonthDateTimeText);

    // Format month and year string
    const previousMonthAndYearText = formatMonthAndYear(previousMonthDate);

    // Assert that month and year text is correctly formatted
    cy.get('@month-year')
      .should('have.text', previousMonthAndYearText);
  });

  it('should change date by choosing different date from datepicker', () => {
    // Choose date 14th
    cy.get('@date-button')
      .eq(13)
      .click();

    // Set the new date
    const newDate = new Date(new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    ).setDate(14));
    
    // Get todays date
    const selectedDate = newDate.getDate();

    // Assert that todays date isn't selected
    cy.get('@date-button')
      .eq(now.getDate() - 1)
      .should('not.have.class', 'active');

    // Assert that selected date is selected
    cy.get('@date-button')
      .eq(selectedDate - 1)
      .should('have.class', 'active');

    // Format date and time string
    const newMonthDateTimeText = formatDateAndTime(newDate, '12:00');

    // Assert that date and time text is correctly formatted
    cy.get('@date-and-time-dropdown-toggle-input-text')
      .should('have.text', newMonthDateTimeText);
  });
});
