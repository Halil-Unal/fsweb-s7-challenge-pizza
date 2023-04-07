describe('Header Text', function() {
    it('Checks if header text exists', function () {
    cy.visit("http://localhost:3000/");
  })
  })

  describe('Link Navigation', function() {
    it('test geçer mi', function() {
      cy.visit('http://localhost:3000/pizza');
  
      
      cy.get('input[value="Domates"]').click();
      cy.get('input[value="Mısır"]').click();
      cy.get('input[value="Soğan"]').click();
      cy.get('input[value="Pepperoni"]').click();
      cy.get('input[value="Sucuk"]').click();
      
      cy.get('button[type="submit"]').should("be.visible");
      
     
    
    })
  })
  describe('Link Navigation', function() {
    it('test geçer mi', function() {
      cy.visit('http://localhost:3000/pizza');
  
      
      cy.get('input[value="Domates"]').click();
      cy.get('input[value="Mısır"]').click();
      cy.get('input[value="Soğan"]').click();

      
      cy.get('button[type="submit"]').should("be.disabled");
      
 
    })
  })