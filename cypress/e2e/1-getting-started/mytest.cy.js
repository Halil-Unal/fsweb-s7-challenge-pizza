describe('Header Text', function() {
    it('Checks if header text exists', function () {
    cy.visit("http://localhost:3000/");
  })
  })

  describe('Link Navigation', function() {
    it('4-10 arası malzeme seçilebilir isim 2 harften çok olmalı', function() {
      cy.visit('http://localhost:3000/pizza');
  
      cy.get('input[name="sipariş değeri"]').type("ali");
      cy.get('input[value="Domates"]').click();
      cy.get('input[value="Mısır"]').click();
      cy.get('input[value="Soğan"]').click();
      cy.get('input[value="Pepperoni"]').click();
      cy.get('input[value="Sucuk"]').click();
      
      cy.get('button[type="submit"]').should("be.visible");
      
     
    
    })
    
  })
  describe('Link Navigation', function() {
    it('malzeme doğru isim hatalı', function() {
      cy.visit('http://localhost:3000/pizza');
  
      cy.get('input[name="sipariş değeri"]').type("al");
      cy.get('input[value="Domates"]').click();
      cy.get('input[value="Mısır"]').click();
      cy.get('input[value="Soğan"]').click();
      cy.get('input[value="Pepperoni"]').click();
      cy.get('input[value="Sucuk"]').click();
      
      cy.get('button[type="submit"]').should("be.disabled");
      
     
    
    })
    
  })
  describe('Link Navigation', function() {
    it('malzeme hatalı isim doğru', function() {
      cy.visit('http://localhost:3000/pizza');
  
      cy.get('input[name="sipariş değeri"]').type("ali");
      cy.get('input[value="Domates"]').click();
      cy.get('input[value="Mısır"]').click();

      
      cy.get('button[type="submit"]').should("be.disabled");
      
     
    
    })
    
  })
  describe('Link Navigation', function() {
    it('4 elemandan az seçilemez', function() {
      cy.visit('http://localhost:3000/pizza');
  
      
      cy.get('input[value="Domates"]').click();
      cy.get('input[value="Mısır"]').click();
      cy.get('input[value="Soğan"]').click();

      
      cy.get('button[type="submit"]').should("be.disabled");
      
 
    })
  })
  describe('Link Navigation', function() {
    it('10 elemandan fazla seçilemez', function() {
      cy.visit('http://localhost:3000/pizza');
  
      
      cy.get('input[value="Domates"]').click();
      cy.get('input[value="Mısır"]').click();
      cy.get('input[value="Soğan"]').click();
      cy.get('input[value="Sosis"]').click();
      cy.get('input[value="Kanada jambonu"]').click();
      cy.get('input[value="Biber"]').click();
      cy.get('input[value="Kabak"]').click();
      cy.get('input[value="Ananas"]').click();
      cy.get('input[value="Jalepeno"]').click();
      cy.get('input[value="Tavuk Izgara"]').click();
      cy.get('input[value="Pepperoni"]').click();
      cy.get('button[type="submit"]').should("be.disabled");
      
 
    })
  })