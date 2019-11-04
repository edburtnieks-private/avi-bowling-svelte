import mount from 'cypress-svelte-unit-test';
import Checkbox from '../../../src/components/Inputs/Checkbox/index.svelte';

describe('checkbox', () => {
  beforeEach(() => {
    // Default checkbox
    mount(Checkbox, {
      props: {
        id: 'checkbox',
        label: 'Label'
      }
    });

    // Aliases
    cy.get('[data-cy=checkbox-label]')
      .as('checkbox-label');
    cy.get('[data-cy=checkbox-input]')
      .as('checkbox-input');
    cy.get('[data-cy=custom-checkbox]')
      .as('custom-checkbox');
  });

  it('should show checkbox with changing states', () => {
    // Default (unchecked)
    cy.get('@checkbox-label')
      .should('have.text', 'Label');
    cy.get('@checkbox-input')
      .should('have.id', 'checkbox')
      .and('not.be.disabled')
      .and('not.be.checked');
    cy.customCheckboxContent('none');

    // Check
    cy.get('@checkbox-input')
      .check()
      .should('be.checked');
    cy.customCheckboxContent('""');

    // Uncheck
    cy.get('@checkbox-input')
      .uncheck()
      .should('not.be.checked');
    cy.customCheckboxContent('none');

    // Disable
    cy.get('@checkbox-input')
      .invoke('attr', 'disabled', true)
      .should('be.disabled');

    // Enable
    cy.get('@checkbox-input')
      .invoke('attr', 'disabled', false)
      .should('not.be.disabled');

    // Check and disable
    cy.get('@checkbox-input')
      .check()
      .invoke('attr', 'disabled', true)
      .should('be.checked')
      .and('be.disabled');
    cy.customCheckboxContent('""');
  });

  it('should show checkbox with checked prop', () => {
    mount(Checkbox, {
      props: {
        id: 'checkbox',
        label: 'Label',
        checked: true
      }
    });

    cy.get('@checkbox-input')
      .should('be.checked');
    cy.customCheckboxContent('""');
  });

  it('should show checkbox with disabled prop', () => {
    mount(Checkbox, {
      props: {
        id: 'checkbox',
        label: 'Label',
        disabled: true
      }
    });

    cy.get('@checkbox-input')
      .should('be.disabled');
  });

  it('should show checkbox with checked and disabled props', () => {
    mount(Checkbox, {
      props: {
        id: 'checkbox',
        label: 'Label',
        checked: true,
        disabled: true
      }
    });

    cy.get('@checkbox-input')
      .should('be.checked')
      .and('be.disabled');
    cy.customCheckboxContent('""');
  });
});
