describe('player names', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy=reservation-form] form')
      .within(() => {
        // Aliases
        cy.get('[data-cy=more-details-dropdown]')
          .as('more-details-dropdown')

        cy.get('@more-details-dropdown')
          .within(() => {
            // Open more details dropdown
            cy.get('[data-cy=dropdown-toggle-button]')
              .click();
    
            // More details dropdown aliases
            cy.get('[data-cy=player-name-input] [data-cy=label]')
              .as('player-name-label');
            cy.get('[data-cy=player-name-input] [data-cy=input]')
              .as('player-name-input');
            cy.get('[data-cy=player-count-increment-input] [data-cy=decrement-button]')
              .as('player-count-decrement-button');
            cy.get('[data-cy=player-count-increment-input] [data-cy=increment-button]')
              .as('player-count-increment-button');
          });
      });
  });

  it('should show player name inputs with labels', () => {
    // Inputs
    cy.get('@player-name-input')
      .should('exist')
      .and('be.visible')
      .and('have.length', 2);

    // Labels
    cy.get('@player-name-label')
      .eq(0)
      .should('have.text', 'Player 1');
    cy.get('@player-name-label')
      .eq(1)
      .should('have.text', 'Player 2');

    // Default values
    cy.get('@player-name-input')
      .eq(0)
      .should('be.empty');
    cy.get('@player-name-input')
      .eq(1)
      .should('be.empty');
  });

  it('should type player names', () => {
    cy.get('@player-name-input')
      .eq(0)
      .type('Player 1 name')
      .should('have.value', 'Player 1 name');

    cy.get('@player-name-input')
      .eq(1)
      .type('Player 2 name')
      .should('have.value', 'Player 2 name');
  });

  it('should dynamically change player input count depending on player count', () => {
    // Set player count to 1
    cy.get('@player-count-decrement-button')
      .click();

    // Assert that there are 1 player name input field
    cy.get('@player-name-input')
      .should('have.length', 1);

    // Set player count to 6
    cy.get('@player-count-increment-button')
      .click()
      .click()
      .click()
      .click()
      .click();

    // Assert that there are 6 player name input fields
    cy.get('@player-name-input')
      .should('have.length', 6);
  });

  it('should add back previously typed players after removing and adding player names', () => {
    cy.get('@more-details-dropdown')
      .within(() => {
        // Set player count to 3
        cy.get('@player-count-increment-button')
          .click()

        // Get new player name inputs
        cy.get('[data-cy=player-name-input] [data-cy=input]')
          .as('player-name-input');

        // Type player names
        cy.get('@player-name-input')
          .eq(0)
          .type('Player 1 name')
          .should('have.value', 'Player 1 name');
    
        cy.get('@player-name-input')
          .eq(1)
          .type('Player 2 name')
          .should('have.value', 'Player 2 name');

        cy.get('@player-name-input')
          .eq(2)
          .type('Player 3 name')
          .should('have.value', 'Player 3 name');
    
        // Set player count to 1
        cy.get('@player-count-decrement-button')
          .click()
          .click();
    
        // Set player count back to 3
        cy.get('@player-count-increment-button')
          .click()
          .click();

        // Get new player name inputs
        cy.get('[data-cy=player-name-input] [data-cy=input]')
          .as('player-name-input');
    
        // Assert that removed player names are added back
        cy.get('@player-name-input')
          .eq(1)
          .should('have.value', 'Player 2 name');

        cy.get('@player-name-input')
          .eq(2)
          .should('have.value', 'Player 3 name');
      });
  });
});
