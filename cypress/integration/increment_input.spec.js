import mount from 'cypress-svelte-unit-test';
import IncrementInput from '../../src/components/Inputs/IncrementInput/index.svelte';

describe('increment input', () => {
  beforeEach(() => {
    // Default increment input
    mount(IncrementInput, {
      props: {
        id: "increment-input",
        label: "Label",
        value: 1,
        minValue: 0,
        maxValue: 3
      }
    });

    // Aliases
    cy.get('[data-cy=label]').as('label');
    cy.get('[data-cy=input-wrapper]').as('input-wrapper');
    cy.get('[data-cy=input]').as('input');
    cy.get('[data-cy=decrement-button]').as('decrement-button');
    cy.get('[data-cy=increment-button]').as('increment-button');
  });
  
  it('should show increment input with changing states', () => {
    // Default
    cy.get('@label').should('have.text', 'Label');
    cy.get('[data-cy=custom-label]').should('not.exist');

    cy.get('@input-wrapper')
      .should('have.class', 'global-input-wrapper')
      .and('have.class', 'increment-input-wrapper');

    cy.get('@input')
      .should('have.id', 'increment-input')
      .and('be.disabled')
      .and('have.value', '1')
      .and('have.class', 'increment-input');
      
    cy.get('@decrement-button').should('not.be.disabled');
    cy.get('@increment-button').should('not.be.disabled');

    // Increment value by 2
    cy.get('@increment-button')
      .click()
      .click();

    // Value should be 3 and increment button disabled
    cy.get('@input').should('have.value', '3');
    cy.get('@decrement-button').should('not.be.disabled');
    cy.get('@increment-button').should('be.disabled');

    // Decrement value by 2
    cy.get('@decrement-button')
      .click()
      .click();

    // Value should be 1 and both buttons clickable
    cy.get('@input').should('have.value', '1');
    cy.get('@decrement-button').should('not.be.disabled');
    cy.get('@increment-button').should('not.be.disabled');

    // Decrement value by 1
    cy.get('@decrement-button')
      .click();

    // Value should be 0 and decrement button disabled
    cy.get('@input').should('have.value', '0');
    cy.get('@decrement-button').should('be.disabled');
    cy.get('@increment-button').should('not.be.disabled');
  });

  it('should show increment input with minimum starting value', () => {
    mount(IncrementInput, {
      props: {
        id: "increment-input",
        label: "Label",
        value: 0,
        minValue: 0,
        maxValue: 3
      }
    });

    cy.get('@input').should('have.value', '0');
    cy.get('@decrement-button').should('be.disabled');
    cy.get('@increment-button').should('not.be.disabled');
  });

  it('should show increment input with maximum starting value', () => {
    mount(IncrementInput, {
      props: {
        id: "increment-input",
        label: "Label",
        value: 3,
        minValue: 0,
        maxValue: 3
      }
    });

    cy.get('@input').should('have.value', '3');
    cy.get('@decrement-button').should('not.be.disabled');
    cy.get('@increment-button').should('be.disabled');
  });

  it('should show increment input with valueText prop', () => {
    mount(IncrementInput, {
      props: {
        id: "increment-input",
        label: "Label",
        value: 1,
        minValue: 0,
        maxValue: 3,
        valueText: "1 point"
      }
    });

    cy.get('@input').should('have.value', '1 point')
  });

  it('should show increment input with disabled prop', () => {
    mount(IncrementInput, {
      props: {
        id: "increment-input",
        label: "Label",
        value: 1,
        minValue: 0,
        maxValue: 3,
        disabled: true
      }
    });

    cy.get('@input-wrapper').should('have.class', 'increment-input-wrapper-disabled');

    cy.get('@input').should('have.class', 'increment-input-disabled');

    cy.get('@decrement-button')
      .should('be.disabled')
      .and('have.class', 'disabled-input');
      
    cy.get('@increment-button')
      .should('be.disabled')
      .and('have.class', 'disabled-input');
  });

  it('should show increment input with custom label', () => {
    mount(IncrementInput, {
      props: {
        id: "increment-input",
        value: 1,
        minValue: 0,
        maxValue: 3
      }
    });

    cy.get('[data-cy=custom-label]').should('exist');
  });
});
