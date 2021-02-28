describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
    
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');

    cy.get('#volume-number').then($el => {
      expect($el).to.be.value(33);
    });
  });

  it('Audio changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');

    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and Sound Change when party horn radio button selected', () => {
    cy.get('#radio-car-horn').not('disabled').check().should('be.checked');

    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', "./assets/media/audio/car-horn.mp3");
    });
  });

  describe('Volume image changes with increasing volumes', () => {

    it('Image changes for no volume', () => {
      cy.get('#volume-number').clear().type('0');
      cy.get('#volume-image').then($el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg')
      });
    });

    it('Image changes for low volume', () => {
      cy.get('#volume-number').clear().type('25');
      cy.get('#volume-image').then($el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
      });
    });

    it('Image changes for medium volume', () => {
      cy.get('#volume-number').clear().type('50');
      cy.get('#volume-image').then($el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
      });
    });

    it('Image changes for high volume', () => {
      cy.get('#volume-number').clear().type('100');
      cy.get('#volume-image').then($el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
      });
    });
  });

  it('Honk disabled when the textbox input is empty', () => {
    cy.get('#volume-number').clear();

    cy.get('#honk-btn').then($el => {
      expect($el).to.have.prop('disabled', true);
    });
  });

  it('Honk disabled when the textbox input is non-number', () => {
    cy.get('#volume-number').clear().type('a');

    cy.get('#honk-btn').then($el => {
      expect($el).to.have.prop('disabled', true);
    });
  });

  it('Error shown when volume number is typed outside of given range', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('#volume-number:invalid').should('have.length',1);
  });

});
