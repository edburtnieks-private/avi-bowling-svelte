// Set today's date
const date = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
  new Date().getHours() + 1
);

describe('reservation form', () => {
  beforeEach(() =>  {
    cy.visit('http://localhost:3000');

    // Aliases
    cy.get('[data-cy=reservation-form] form')
      .as('reservation-form');

    cy.get('@reservation-form')
      .within(() => {
        cy.get('[data-cy=date-and-time-dropdown]')
          .as('date-and-time-dropown');
        cy.get('[data-cy=more-details-dropdown]')
          .as('more-details-dropown');
        cy.get('[data-cy=lane-count-increment-input] [data-cy=decrement-button]')
          .as('lane-count-decrement-button');
        cy.get('[data-cy=lane-count-increment-input] [data-cy=increment-button]')
          .as('lane-count-increment-button');
        cy.get('[data-cy=name-input] [data-cy=input]')
          .as('name-input');
        cy.get('[data-cy=contact-input] [data-cy=input]')
          .as('contact-input');

        // Date and time dropdown aliases
        cy.get('@date-and-time-dropown')
          .within(() => {
            cy.get('[data-cy=dropdown-toggle-button]')
              .as('date-and-time-dropdown-toggle-button');
          });

        // More details dropdown aliases
        cy.get('@more-details-dropown')
          .within(() => {
            cy.get('[data-cy=dropdown-toggle-button]')
              .as('more-details-dropdown-toggle-button');
          });
    });
  });

  it('should show reservation form', () => {
    cy.get('@reservation-form')
      .should('exist')
      .and('be.visible');
  });

  it('should create new reservation by changing every input value', () => {
    const reservation = {
      name: '',
      contact: '',
      date,
      duration: 1,
      shoeCount: 2,
      players: [],
      lanes: []
    };
      
    // --------------------
    // START OF DATE AND TIME DROPDOWN
    // --------------------

    // Open date and time dropdown
    cy.get('@date-and-time-dropdown-toggle-button')
      .click();

    // Date and time dropdown aliases
    cy.get('@date-and-time-dropown')
      .within(() => {
        // Date and time dropdown aliases
        cy.get('[data-cy=previous-month-button]')
          .as('previous-month-button');
        cy.get('[data-cy=next-month-button]')
          .as('next-month-button');
        cy.get('[data-cy=date-button]')
          .as('date-button');
        cy.get('[data-cy=start-time-select] [data-cy=select]')
          .as('start-time-select');
        cy.get('[data-cy=duration-increment-input] [data-cy=input]')
          .as('duration-input');
        cy.get('[data-cy=duration-increment-input] [data-cy=decrement-button]')
          .as('duration-decrement-button');
        cy.get('[data-cy=duration-increment-input] [data-cy=increment-button]')
          .as('duration-increment-button');

        // --------------------
        // DATEPICKER
        // --------------------
    
        // Go 2 months forward
        cy.get('@next-month-button')
          .click()
          .click();

        // Go to previous month
        cy.get('@previous-month-button')
          .click();

        // Choose date 14th
        cy.get('@date-button')
          .eq(13)
          .click()
          .invoke('val')
          .then(value => {
            reservation.date = new Date(value);
          });

        // --------------------
        // START TIME
        // --------------------

        // Select new start time
        cy.get('@start-time-select')
          .select('17')
          .invoke('val')
          .then((startTime) => {
            reservation.date.setHours(startTime);
          });

        // --------------------
        // DURATION
        // --------------------

        // Increase duration to 3
        cy.get('@duration-increment-button')
          .click();

        // Decrease duration to 2
        cy.get('@duration-decrement-button')
          .click();

        cy.get('@duration-input')
          .invoke('val')
          .then(value => {
            reservation.duration = +value[0];
          });

        // Close date and time dropdown
        cy.get('@date-and-time-dropdown-toggle-button')
          .click();
    });

    // --------------------
    // END OF DATE AND TIME DROPDOWN
    // --------------------

    // --------------------
    // LANE COUNT
    // --------------------

    // Increase lane count to 3
    cy.get('@lane-count-increment-button')
      .click()
      .click();

    // Decrease lane count to 2
    cy.get('@lane-count-decrement-button')
      .click();

    // --------------------
    // NAME
    // --------------------

    cy.get('@name-input')
      .type('Edgar Burtnieks')
      .invoke('val')
      .then(value => {
        reservation.name = value;
      });

    // --------------------
    // CONTACT
    // --------------------

    cy.get('@contact-input')
      .type('22222222')
      .invoke('val')
      .then(value => {
        reservation.contact = value;
      });

    // --------------------
    // START OF MORE DETAILS DROPDOWN
    // --------------------

    // Open more details dropdown
    cy.get('@more-details-dropdown-toggle-button')
      .click();

    // More details dropdown aliases
    cy.get('@more-details-dropown')
      .within(() => {
        // More details dropdown aliases
        cy.get('[data-cy=lane-button]')
          .as('lane-button');
        cy.get('[data-cy=player-count-increment-input] [data-cy=decrement-button]')
          .as('player-count-decrement-button');
        cy.get('[data-cy=player-count-increment-input] [data-cy=increment-button]')
          .as('player-count-increment-button');
        cy.get('[data-cy=shoe-count-increment-input] [data-cy=shoe-checkbox] [data-cy=checkbox-input]')
          .as('shoe-checkbox');
        cy.get('[data-cy=shoe-count-increment-input] [data-cy=input]')
          .as('shoe-count-input');
        cy.get('[data-cy=shoe-count-increment-input] [data-cy=decrement-button]')
          .as('shoe-count-decrement-button');
        cy.get('[data-cy=shoe-count-increment-input] [data-cy=increment-button]')
          .as('shoe-count-increment-button');
        cy.get('[data-cy=player-name-input] [data-cy=input]')
          .as('player-name-input');
    });

    // --------------------
    // LANE BUTTONS
    // --------------------

    // Select lane 2
    cy.get('@lane-button')
      .eq(1)
      .click()
      .invoke('val')
      .then(value => {
        reservation.lanes.push(+value);
      });

    // Select lane 3
    cy.get('@lane-button')
      .eq(2)
      .click()
      .invoke('val')
      .then(value => {
        reservation.lanes.push(+value);
      });

    // Unselect lane 3
    cy.get('@lane-button')
      .eq(2)
      .click()
      .invoke('val')
      .then(value => {
        const index = reservation.lanes.indexOf(+value);
        if (index !== -1) reservation.lanes.splice(index, 1);
      });
    
    // Select lane 1
    cy.get('@lane-button')
      .eq(0)
      .click()
      .invoke('val')
      .then(value => {
        reservation.lanes.push(+value);
      });

    // Increase lane count to 4
    cy.get('@lane-count-increment-button')
      .click()
      .click();

    // Select lane 4
    cy.get('@lane-button')
      .eq(3)
      .click()
      .invoke('val')
      .then(value => {
        reservation.lanes.push(+value);
      });

    // Select lane 5
    cy.get('@lane-button')
      .eq(4)
      .click()
      .invoke('val')
      .then(value => {
        reservation.lanes.push(+value);
      });

    // Decrease lane count to 2
    cy.get('@lane-count-decrement-button')
      .click()
      .click();

    // Remove lane 4 and 5 from lanes array
    cy.get('@lane-button')
      .eq(3)
      .invoke('val')
      .then(value => {
        const index = reservation.lanes.indexOf(+value);
        if (index !== -1) reservation.lanes.splice(index, 1);
      });

    cy.get('@lane-button')
      .eq(4)
      .invoke('val')
      .then(value => {
        const index = reservation.lanes.indexOf(+value);
        if (index !== -1) reservation.lanes.splice(index, 1);
      });

    // Increase lane count to 3
    cy.get('@lane-count-increment-button')
      .click();

    // Add lane 4 back to lanes array
    cy.get('@lane-button')
      .eq(3)
      .invoke('val')
      .then(value => {
        reservation.lanes.push(+value);

        // Sort reservation lanes
        reservation.lanes.sort();
      });

    // --------------------
    // PLAYER COUNT
    // --------------------

    // Increase player count to 4
    cy.get('@player-count-increment-button')
      .click()
      .click();

    // Decrease player count to 3
    cy.get('@player-count-decrement-button')
      .click();

    // --------------------
    // SHOE COUNT
    // --------------------

    // Remove shoes
    cy.get('@shoe-checkbox')
      .uncheck({ force: true });

    // Add shoes back
    cy.get('@shoe-checkbox')
      .check({ force: true });

    // Decrease shoe count to 1
    cy.get('@shoe-count-decrement-button')
      .click()
      .click();

    // Increase shoe count to 2
    cy.get('@shoe-count-increment-button')
      .click();

    cy.get('@shoe-count-input')
      .invoke('val')
      .then(value => {
        reservation.shoeCount = +value;
      });

    // --------------------
    // PLAYER NAMES
    // --------------------

    // Get new player name inputs
    cy.get('[data-cy=player-name-input] [data-cy=input]')
      .as('player-name-input');

    // Type player 1 and 2 names
    cy.get('@player-name-input')
      .eq(0)
      .type('Player 1')
      .invoke('val')
      .then(value => {
        reservation.players.push(value);
      });

    cy.get('@player-name-input')
      .eq(1)
      .type('Player 2')
      .invoke('val')
      .then(value => {
        reservation.players.push(value);
      });

    // Decrease player count to 1
    cy.get('@player-count-decrement-button')
      .click()
      .click();

    // Increase player count back to 3
    cy.get('@player-count-increment-button')
      .click()
      .click();

    cy.get('@shoe-count-input')
      .invoke('val')
      .then(value => {
        reservation.shoeCount = +value;
      });

    // Get new player name inputs
    cy.get('[data-cy=player-name-input] [data-cy=input]')
      .as('player-name-input');

    // Type player 3 name
    cy.get('@player-name-input')
      .eq(2)
      .type('Player 3')
      .invoke('val')
      .then(value => {
        reservation.players.push(value);
      });

    // Close more details dropdown
    cy.get('@more-details-dropdown-toggle-button')
      .click();

    // --------------------
    // END OF MORE DETAILS DROPDOWN
    // --------------------

    cy.get('@reservation-form')
      .submit()
      .then(() => {
        expect(reservation)
          .to.have.property('name')
          .and.be.a('string')
          .and.eq('Edgar Burtnieks');

        expect(reservation)
          .to.have.property('contact')
          .and.be.a('string')
          .and.eq('22222222');

        expect(reservation)
          .to.have.property('duration')
          .and.be.a('number')
          .and.eq(2);

        expect(reservation)
          .to.have.property('shoeCount')
          .and.be.a('number')
          .and.eq(3);

        expect(reservation)
          .to.have.property('players')
          .and.be.an('array')
          .and.have.lengthOf(3)
          .and.have.members(["Player 1", "Player 2", "Player 3"]);

        expect(reservation)
          .to.have.property('lanes')
          .and.be.an('array')
          .and.have.lengthOf(3)
          .and.have.members([1, 2, 4]);

        cy.log(reservation);
      });
  });
});
