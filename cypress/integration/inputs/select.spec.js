import mount from 'cypress-svelte-unit-test';
import Select from '../../../src/components/Inputs/Select/index.svelte';

describe('select', () => {
  beforeEach(() => {
    // Default select
    mount(Select, {
      props: {
        id: 'select',
        label: 'Label',
        options: ['first', 'second', 'third', 'fourth', 'fifth'],
        value: 'second'
      }
    });

    // Aliases
    cy.get('[data-cy=select]')
      .as('select');
    cy.get('[data-cy=label]')
      .as('label');
    cy.get('[data-cy=caret-icon]')
      .as('caret-icon');
  });

  it('should show select with changing states', () => {
    // Default
    cy.get('@label')
      .should('have.text', 'Label');
    cy.get('@select')
      .should('have.value', 'second')
      .and('have.id', 'select');
    cy.get('@caret-icon')
      .should('not.have.class', 'active');
    
    // Select option with value 'third'
    cy.get('@select')
      .select('third')
      .should('have.value', 'third');

    // Disable
    cy.get('@select')
      .invoke('attr', 'disabled', true)
      .and('be.disabled');

    // Enable
    cy.get('@select')
      .invoke('attr', 'disabled', false)
      .and('not.be.disabled');

    // Open select without select an option
    cy.get('@select')
      .trigger('click');
    cy.get('@caret-icon')
      .should('have.class', 'active');

    // Close select without select an option
    cy.get('@select')
      .trigger('click');
    cy.get('@caret-icon')
      .should('not.have.class', 'active');
  });

  it('should show select with disabled prop', () => {
    mount(Select, {
      props: {
        id: 'select',
        label: 'Label',
        options: ['first', 'second', 'third', 'fourth', 'fifth'],
        value: 'second',
        disabled: true
      }
    });

    cy.get('@select')
      .should('be.disabled');
    cy.get('@caret-icon')
      .should('have.class', 'disabled');
  });
});
