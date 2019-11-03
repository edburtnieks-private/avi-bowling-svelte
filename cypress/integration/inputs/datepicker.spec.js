import mount from 'cypress-svelte-unit-test';
import Datepicker from '../../../src/components/Inputs/Datepicker/index.svelte';

describe('datepicker', () => {
  beforeEach(() => {
    const now = new Date(2019, 9, 27);

    // Default datepicker
    mount(Datepicker, {
      props: {
        selectedDate: now
      }
    });

    cy.clock(now);

    // Aliases
    cy.get('[data-cy=month-year]').as('month-year');
    cy.get('[data-cy=date-button]').as('date-button');
    cy.get('[data-cy=date-text]').as('date-text');
    cy.get('[data-cy=previous-month-button]').as('previous-month-button');
    cy.get('[data-cy=next-month-button]').as('next-month-button');
    cy.get('[data-cy=previous-month-button] [data-cy=caret-icon]').as('previous-month-button-caret-icon');
    cy.get('[data-cy=next-month-button] [data-cy=caret-icon]').as('next-month-button-caret-icon');
  });

  it('should show datepicker', () => {
    // Default
    cy.get('@month-year').should('have.text', 'October 2019');
    cy.get('@date-button').eq(26).should('have.class', 'active');
    cy.get('@previous-month-button').should('be.disabled');
    cy.get('@previous-month-button-caret-icon')
      .should('have.class', 'disabled')
      .and('have.class', 'left');
    cy.get('@next-month-button-caret-icon').should('have.class', 'right');
  });
  
  it('should change months', () => {
    // Move 3 months forwards
    cy.get('@next-month-button')
      .click()
      .click()
      .click();
    cy.get('@month-year').should('have.text', 'January 2020');
    cy.get('@date-button').eq(26).should('have.class', 'active');
    cy.get('@previous-month-button').should('not.be.disabled');
  
    // Move 3 months backwards
    cy.get('@previous-month-button')
      .click()
      .click()
      .click();
    cy.get('@month-year').should('have.text', 'October 2019');
    cy.get('@date-button').eq(26).should('have.class', 'active');
    cy.get('@previous-month-button').should('be.disabled');
  });

  it('should change date', () => {
    cy.get('@date-button').eq(2).click();
    cy.get('@date-button').eq(2).should('have.class', 'active');
  });
});
