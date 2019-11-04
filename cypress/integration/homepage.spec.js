describe('homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it.skip('should create new reservation by changing every value and no empty fields left', () => {
    cy.get('[data-cy=reservation-form] form').within(() => {
      // Reservation form aliases
      cy.get('[data-cy=date-and-time-dropdown] [data-cy=dropdown-toggle-button]').as('date-and-time-dropdown-button');
      cy.get('[data-cy=date-and-time-dropdown] [data-cy=dropdown-toggle-input-text]').as('dropdown-toggle-input-text');
      cy.get('[data-cy=lane-count-increment-input] [data-cy=input]').as('lane-count-input');
      cy.get('[data-cy=lane-count-increment-input] [data-cy=decrement-button]').as('lane-count-decrement-button');
      cy.get('[data-cy=lane-count-increment-input] [data-cy=increment-button]').as('lane-count-increment-button');
      cy.get('[data-cy=name-input] [data-cy=input]').as('name-input');
      cy.get('[data-cy=contact-input] [data-cy=input]').as('contact-input');
      cy.get('[data-cy=more-details-dropdown] [data-cy=dropdown-toggle-button]').as('more-details-dropdown-button');

      // --------------------
      // DATE AND TIME BUTTON
      // --------------------

      // Set today's day
      const now = new Date();

      // Set new dropdown toggle input text
      const dateTimeText = `${now.toLocaleDateString('en', {
        month: 'long',
        day: 'numeric'
      })}, 12:00`;

      // Compare date with dropdown toggle input text
      cy.get('@dropdown-toggle-input-text').then($text => {
        expect($text.text()).to.eq(dateTimeText);
      });

      // --------------------
      // DATE AND TIME DROPDOWN START
      // --------------------

      // Date and time dropdown content should not exist in DOM
      cy.get('[data-cy=date-and-time-dropdown] [data-cy=dropdown-content]').should('not.exist');

      // Open date and time dropdown
      cy.get('@date-and-time-dropdown-button').click();
      
      // Date and time dropdown aliases
      cy.get('[data-cy=date-and-time-dropdown] [data-cy=dropdown-content]').as('date-and-time-dropdown-content');
      cy.get('[data-cy=date-and-time-dropdown] [data-cy=previous-month-button]').as('previous-month-button');
      cy.get('[data-cy=date-and-time-dropdown] [data-cy=next-month-button]').as('next-month-button');
      cy.get('[data-cy=date-and-time-dropdown] [data-cy=date-button]').as('date-button');
      cy.get('[data-cy=date-and-time-dropdown] [data-cy=start-time-select] [data-cy=select]').as('start-time-select');
      cy.get('[data-cy=date-and-time-dropdown] [data-cy=duration-increment-input] [data-cy=input]').as('duration-input');
      cy.get('[data-cy=date-and-time-dropdown] [data-cy=duration-increment-input] [data-cy=decrement-button]').as('duration-decrement-button');
      cy.get('[data-cy=date-and-time-dropdown] [data-cy=duration-increment-input] [data-cy=increment-button]').as('duration-increment-button');

      // Date and time dropdown content should exist in DOM
      cy.get('@date-and-time-dropdown-content').should('exist');

      // --------------------
      // DATEPICKER
      // --------------------

      // Go forward 2 months
      cy.get('@next-month-button')
        .click()
        .click();

      // Go one month back
      cy.get('@previous-month-button')
        .click();

      // Click date 14th
      cy.get('@date-button').eq(13).click();

      // Set new date
      const newDate = new Date(now.getFullYear(), now.getMonth() + 1, 14);

      // --------------------
      // START TIME
      // --------------------

      // Select start time
      cy.get('@start-time-select').select('17:00');

      // New dropdown toggle input text
      const newDateTimeText = `${newDate.toLocaleDateString('en', {
        month: 'long',
        day: 'numeric'
      })}, 17:00`;

      // Compare new date with dropdown toggle input text
      cy.get('@dropdown-toggle-input-text').then($text => {
        expect($text.text()).to.eq(newDateTimeText);
      });

      // --------------------
      // DURATION
      // --------------------

      // Start duration should be 1h by default
      cy.get('@duration-input').should('have.value', '1h');

      // Duration decrement button should be disabled
      cy.get('@duration-decrement-button')
        .should('be.disabled')
        .and('have.class', 'disabled-value');

      // Duration increment button should be enabled
      cy.get('@duration-increment-button')
        .should('not.be.disabled')
        .and('not.have.class', 'disabled-value');

      // Change duration to maximum value - 4h
      cy.get('@duration-increment-button')
        .click()
        .click()
        .click();

      // Duration should be 4h
      cy.get('@duration-input').should('have.value', '4h');

      // Duration decrement button should be enabled
      cy.get('@duration-decrement-button')
        .should('not.be.disabled')
        .and('not.have.class', 'disabled-value');

      // Duration increment button should be disabled
      cy.get('@duration-increment-button')
        .should('be.disabled')
        .and('have.class', 'disabled-value');

      // Change duration back to 2h
      cy.get('@duration-decrement-button')
        .click()
        .click();

      // Duration should be 2h
      cy.get('@duration-input').should('have.value', '2h');

      // Both duration decrement and increment buttons should be enabled
      cy.get('@duration-decrement-button')
        .should('not.be.disabled')
        .and('not.have.class', 'disabled-value');
      cy.get('@duration-increment-button')
        .should('not.be.disabled')
        .and('not.have.class', 'disabled-value');

      // Close date and time dropdown
      cy.get('@date-and-time-dropdown-button').click();

      // --------------------
      // DATE AND TIME DROPDOWN END
      // --------------------

      // --------------------
      // LANE COUNT
      // --------------------

      // Lane count should be 1 by default
      cy.get('@lane-count-input').should('have.value', '1');

      // Lane count decrement button should be disabled
      cy.get('@lane-count-decrement-button')
        .should('be.disabled')
        .and('have.class', 'disabled-value');

      // Change lane count to maximum value - 10
      cy.get('@lane-count-increment-button')
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click();

      // Lane count should be 10
      cy.get('@lane-count-input').should('have.value', '10');

      // Lane count increment button should be disabled
      cy.get('@lane-count-increment-button')
        .should('be.disabled')
        .and('have.class', 'disabled-value');

      // Change lane count back to 3
      cy.get('@lane-count-decrement-button')
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click();

      // Lane count should be 3
      cy.get('@lane-count-input').should('have.value', '3');

      // Both lane count decrement and increment buttons should be enabled
      cy.get('@lane-count-decrement-button')
        .should('not.be.disabled')
        .and('not.have.class', 'disabled-value');
      cy.get('@lane-count-increment-button')
        .should('not.be.disabled')
        .and('not.have.class', 'disabled-value');

      // --------------------
      // NAME
      // --------------------

      // Type name
      cy.get('@name-input').type('Edgars Burtnieks');
      cy.get('@name-input').should('have.value', 'Edgars Burtnieks');

      // --------------------
      // CONTACT
      // --------------------

      // Type contact
      cy.get('@contact-input').type('26391622');
      cy.get('@contact-input').should('have.value', '26391622');

      // --------------------
      // MORE DETAIL DROPDOWN START
      // --------------------

      // More details dropdown content should not exist in DOM
      cy.get('[data-cy=more-details-dropdown] [data-cy=dropdown-content]').should('not.exist');

      // Open more details dropdown
      cy.get('@more-details-dropdown-button').click();

      // More details dropdown aliases
      cy.get('[data-cy=more-details-dropdown] [data-cy=dropdown-content]').as('more-details-dropdown-content');
      cy.get('[data-cy=more-details-dropdown] [data-cy=lane-button]').as('lane-button');
      cy.get('[data-cy=more-details-dropdown] [data-cy=player-count-increment-input] [data-cy=input]').as('player-count-input');
      cy.get('[data-cy=more-details-dropdown] [data-cy=player-count-increment-input] [data-cy=increment-button]').as('player-count-increment-button');
      cy.get('[data-cy=more-details-dropdown] [data-cy=player-count-increment-input] [data-cy=decrement-button]').as('player-count-decrement-button');
      cy.get('[data-cy=more-details-dropdown] [data-cy=shoe-checkbox] [data-cy=checkbox-input]').as('shoe-checkbox');
      cy.get('[data-cy=more-details-dropdown] [data-cy=shoe-count-increment-input] [data-cy=input-wrapper]').as('shoe-count-input-wrapper');
      cy.get('[data-cy=more-details-dropdown] [data-cy=shoe-count-increment-input] [data-cy=input]').as('shoe-count-input');
      cy.get('[data-cy=more-details-dropdown] [data-cy=shoe-count-increment-input] [data-cy=increment-button]').as('shoe-count-increment-button');
      cy.get('[data-cy=more-details-dropdown] [data-cy=shoe-count-increment-input] [data-cy=decrement-button]').as('shoe-count-decrement-button');
      cy.get('[data-cy=more-details-dropdown] [data-cy=player-name-input] [data-cy=input]').as('player-name-input');

      // More details dropdown content should exist in DOM
      cy.get('@more-details-dropdown-content').should('exist');

      // --------------------
      // LANE BUTTONS
      // --------------------

      // Add lanes 2, 3 and 6
      cy.get('@lane-button').eq(1).click();
      cy.get('@lane-button').eq(2).click();
      cy.get('@lane-button').eq(5).click();

      // Lanes 2 and 3 should be active
      cy.get('@lane-button').eq(1).should('have.class', 'active');
      cy.get('@lane-button').eq(2).should('have.class', 'active');
      cy.get('@lane-button').eq(5).should('have.class', 'active');

      // Rest of the lane buttons should be disabled
      cy.get('@lane-button').eq(0).should('be.disabled');
      cy.get('@lane-button').eq(3).should('be.disabled');
      cy.get('@lane-button').eq(4).should('be.disabled');
      cy.get('@lane-button').eq(6).should('be.disabled');
      cy.get('@lane-button').eq(7).should('be.disabled');
      cy.get('@lane-button').eq(8).should('be.disabled');
      cy.get('@lane-button').eq(9).should('be.disabled');

      // Set lane count to 5
      cy.get('@lane-count-increment-button')
        .click()
        .click();

      // All lane buttons should be enabled
      cy.get('@lane-button').should('not.be.disabled');
      
      // Add lanes 9 and 10
      cy.get('@lane-button').eq(8).click();
      cy.get('@lane-button').eq(9).click();

      // Lanes 9 and 10 should be active
      cy.get('@lane-button').eq(8).should('have.class', 'active');
      cy.get('@lane-button').eq(9).should('have.class', 'active');

      // Rest of the lane buttons should be disabled
      cy.get('@lane-button').eq(0).should('be.disabled');
      cy.get('@lane-button').eq(3).should('be.disabled');
      cy.get('@lane-button').eq(4).should('be.disabled');
      cy.get('@lane-button').eq(6).should('be.disabled');
      cy.get('@lane-button').eq(7).should('be.disabled');

      // Remove lane 9
      cy.get('@lane-button').eq(8).click();

      // Lane 9 should not be active
      cy.get('@lane-button').eq(8).should('not.have.class', 'active');

      // All lane buttons should be enabled
      cy.get('@lane-button').should('not.be.disabled');

      // Add lane 5
      cy.get('@lane-button').eq(4).click();

      // Lane 5 should be active
      cy.get('@lane-button').eq(4).should('have.class', 'active');

      // Rest of the lane buttons should be disabled
      cy.get('@lane-button').eq(0).should('be.disabled');
      cy.get('@lane-button').eq(3).should('be.disabled');
      cy.get('@lane-button').eq(6).should('be.disabled');
      cy.get('@lane-button').eq(7).should('be.disabled');
      cy.get('@lane-button').eq(8).should('be.disabled');

      // Set lane count to 3
      cy.get('@lane-count-decrement-button')
        .click()
        .click();

      // Lanes 5 and 10 should be disable and not active
      cy.get('@lane-button')
        .eq(4)
        .should('be.disabled')
        .and('not.have.class', 'active');
      cy.get('@lane-button')
        .eq(9)
        .should('be.disabled')
        .and('not.have.class', 'active');

      // Set lane count back to 5
      cy.get('@lane-count-increment-button')
        .click()
        .click();

      // Lanes 5 and 10 should be enabled and active
      cy.get('@lane-button')
        .eq(4)
        .should('not.be.disabled')
        .and('have.class', 'active');
      cy.get('@lane-button')
        .eq(9)
        .should('not.be.disabled')
        .and('have.class', 'active');

      // Remove lane 3
      cy.get('@lane-button').eq(2).click();

      // Lane 3 should not be active
      cy.get('@lane-button').eq(2).should('not.have.class', 'active');

      // All lane buttons should be enabled
      cy.get('@lane-button').should('not.be.disabled');

      // Set lane count to 4
      cy.get('@lane-count-decrement-button').click();

      // Lanes 2, 5, 6 and 10 should be active
      cy.get('@lane-button').eq(1).should('have.class', 'active');
      cy.get('@lane-button').eq(4).should('have.class', 'active');
      cy.get('@lane-button').eq(5).should('have.class', 'active');
      cy.get('@lane-button').eq(9).should('have.class', 'active');

      // Rest of the lane buttons should be disabled
      cy.get('@lane-button').eq(0).should('be.disabled');
      cy.get('@lane-button').eq(2).should('be.disabled');
      cy.get('@lane-button').eq(3).should('be.disabled');
      cy.get('@lane-button').eq(6).should('be.disabled');
      cy.get('@lane-button').eq(7).should('be.disabled');
      cy.get('@lane-button').eq(8).should('be.disabled');

      // --------------------
      // PLAYER COUNT
      // --------------------

      // Player and shoe count should be 2 by default
      cy.get('@player-count-input').should('have.value', '2');
      cy.get('@shoe-count-input').should('have.value', '2');
      cy.get('@player-name-input').should('have.length', 2);

      // Change to 1 player
      cy.get('@player-count-decrement-button').click();
      cy.get('@player-count-input').should('have.value', '1');
      cy.get('@player-name-input').should('have.length', 1);

      // Player count decrement input should be disabled
      cy.get('@player-count-decrement-button')
        .should('be.disabled')
        .and('have.class', 'disabled-value');

      // Change to 6 players
      cy.get('@player-count-increment-button')
        .click()
        .click()
        .click()
        .click()
        .click();
      cy.get('@player-count-input').should('have.value', '6');
      cy.get('@player-name-input').should('have.length', 6);

      // Player count increment button should be disabled
      cy.get('@player-count-increment-button')
        .should('be.disabled')
        .and('have.class', 'disabled-value');

      // Player count decrement button should be enabled
      cy.get('@player-count-decrement-button')
        .should('not.be.disabled')
        .and('not.have.class', 'disabled-value');

      // Change back to 3 players
      cy.get('@player-count-decrement-button')
        .click()
        .click()
        .click();
      cy.get('@player-count-input').should('have.value', '3');
      cy.get('@player-name-input').should('have.length', 3);

      // Player count decrement and increment buttons should be enabled
      cy.get('@player-count-decrement-button')
        .should('not.be.disabled')
        .and('not.have.class', 'disabled-value');
      cy.get('@player-count-increment-button')
        .should('not.be.disabled')
        .and('not.have.class', 'disabled-value');

      // --------------------
      // SHOE COUNT
      // --------------------

      // Shoe count should be 1
      cy.get('@shoe-count-input').should('have.value', '1');

      // Shoe checkbox should be checked by default
      cy.get('@shoe-checkbox').should('be.checked');

      // Remove shoes
      cy.get('@shoe-checkbox').uncheck({ force: true });
      cy.get('@shoe-checkbox').should('not.be.checked');

      // All shoe count inputs should be disabled
      cy.get('@shoe-count-input-wrapper').should('have.class', 'increment-input-wrapper-disabled');
      cy.get('@shoe-count-input').should('have.class', 'increment-input-disabled');
      cy.get('@shoe-count-decrement-button')
        .should('be.disabled')
        .and('have.class', 'disabled-input');
      cy.get('@shoe-count-increment-button')
        .should('be.disabled')
        .and('have.class', 'disabled-input');

      // Add back shoes
      cy.get('@shoe-checkbox').check({ force: true });
      cy.get('@shoe-checkbox').should('be.checked');

      // All shoe count inputs should be enabled
      cy.get('@shoe-count-input-wrapper').should('not.have.class', 'increment-input-wrapper-disabled');
      cy.get('@shoe-count-input').should('not.have.class', 'increment-input-disabled');
      cy.get('@shoe-count-decrement-button')
        .should('be.disabled')
        .and('not.have.class', 'disabled-input')
        .and('have.class', 'disabled-value');
      cy.get('@shoe-count-increment-button')
        .should('not.be.disabled')
        .and('not.have.class', 'disabled-input');

      // Set shoe count to 3
      cy.get('@shoe-count-increment-button')
        .click()
        .click();

      // Shoe count should be 3
      cy.get('@shoe-count-input').should('have.value', '3');

      // Shoe count increment button should be disabled
      cy.get('@shoe-count-increment-button')
        .should('be.disabled')
        .and('have.class', 'disabled-value');

      // Set shoe count to 2
      cy.get('@shoe-count-decrement-button').click();

      // Shoe count should be 2
      cy.get('@shoe-count-input').should('have.value', '2');

      // Set player count to 2
      cy.get('@player-count-decrement-button').click();
      
      // Shoe count increment button should be disabled
      cy.get('@shoe-count-increment-button')
        .should('be.disabled')
        .and('have.class', 'disabled-value');

      // Set player count back to 3
      cy.get('@player-count-increment-button').click();

      // Shoe count increment button should be enabled
      cy.get('@shoe-count-increment-button')
        .should('not.be.disabled')
        .and('not.have.class', 'disabled-value');

      // Set shoe count to 3
      cy.get('@shoe-count-increment-button').click();

      // Shoe count should be 3
      cy.get('@shoe-count-input').should('have.value', '3');

      // Set player count to 2
      cy.get('@player-count-decrement-button').click();

      // Shoe count should be 2
      cy.get('@shoe-count-input').should('have.value', '2');

      // Shoe count increment button should be disabled
      cy.get('@shoe-count-increment-button')
        .should('be.disabled')
        .and('have.class', 'disabled-value');

      // --------------------
      // PLAYER NAMES
      // --------------------

      // Get all player name inputs
      cy.get('[data-cy=more-details-dropdown] [data-cy=player-name-input] [data-cy=input]').as('player-name-input');

      // Should be 2 player name inputs
      cy.get('@player-name-input').should('have.length', 2);

      // Both input names should be empty
      cy.get('@player-name-input').eq(0).should('be.empty');
      cy.get('@player-name-input').eq(1).should('be.empty');

      // Type 1st and 2nd player names
      cy.get('@player-name-input').eq(0).type('Player 1');
      cy.get('@player-name-input').eq(1).type('Player 2');

      cy.get('@player-name-input').eq(0).should('have.value', 'Player 1');
      cy.get('@player-name-input').eq(1).should('have.value', 'Player 2');

      // Set player count to 3
      cy.get('@player-count-increment-button').click();

      // Get all player name inputs
      cy.get('[data-cy=more-details-dropdown] [data-cy=player-name-input] [data-cy=input]').as('player-name-input');

      // Should be 2 player name inputs
      cy.get('@player-name-input').should('have.length', 3);

      // New player input should be empty
      cy.get('@player-name-input').eq(2).should('be.empty');

      // Type 3rd player name
      cy.get('@player-name-input').eq(2).type('Player 3');
      cy.get('@player-name-input').eq(2).should('have.value', 'Player 3');

      // Set player count to 2
      cy.get('@player-count-decrement-button').click();

      // Get all player name inputs
      cy.get('[data-cy=more-details-dropdown] [data-cy=player-name-input] [data-cy=input]').as('player-name-input');

      // Should be 2 player name inputs
      cy.get('@player-name-input').should('have.length', 2);

      // Set player count to 3
      cy.get('@player-count-increment-button').click();

      // Get all player name inputs
      cy.get('[data-cy=more-details-dropdown] [data-cy=player-name-input] [data-cy=input]').as('player-name-input');

      // Should be 3 player name inputs
      cy.get('@player-name-input').should('have.length', 3);

      // New player input should be empty
      cy.get('@player-name-input').eq(2).should('be.empty');

      // Set player count to 2
      cy.get('@player-count-decrement-button').click();

      // Get all player name inputs
      cy.get('[data-cy=more-details-dropdown] [data-cy=player-name-input] [data-cy=input]').as('player-name-input');

      // Should be 2 player name inputs
      cy.get('@player-name-input').should('have.length', 2);

      cy.get('@player-name-input').eq(0).should('have.value', 'Player 1');
      cy.get('@player-name-input').eq(1).should('have.value', 'Player 2');

      // Close more details dropdown
      cy.get('@more-details-dropdown-button').click();

      // --------------------
      // MORE DETAIL DROPDOWN END
      // --------------------

      // Submit form
      cy.root().submit();
    });
  });
});
