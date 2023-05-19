/// <reference types="Cypress"/>

describe("Alias and invoke", () => {

  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
    cy.get('@productThumbnail').its('length').should('be.gt', 5);
    cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
  });
 

   it("Validate product thumbnail", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('.thumbnail').as('productThumbnail');
    cy.get('@productThumbnail').should('have.length',16);
    cy.get('@productThumbnail')
      .find('.productcart')
      .invoke('attr', 'title')
      .should('include', 'Add to Cart');
   });

  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");
    // a funcao as cria um alias um apelido para o elemento
    cy.get('.thumbnail').as('productThumbnail');    
    // para utilizar o alias usamos a funcao get e passamos @nome_do_alias
    cy.get('@productThumbnail')
      // a funcao jquery find localiza dentro do elemento selecionado
      // outros elementos, no caso abaixo selecionamos a classe .oneprice 
      .find('.oneprice')
      // a funcao jquery each itera sobre elementos encontrados pelo find
      // um a um assim podemos fazer algo com o elemento
      .each(($elm,_index, _$list) => {
      cy.log($elm.text());
    });

    // localiza o elemento pela classe
    cy.get('.thumbnail')
      // procura dentro do elemento subelementos tambem por sua classe 
      .find('.oneprice')
      // invoca a funcao text() em cada elemento
      .invoke('text')
      // armazena os textos dos elementos em um alias 
      .as('itemPrice')

    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');
   
    var _itemsTotal = 0;
    
    cy.get('@itemPrice').then($linkText => {
      let itemsPriceTotal= 0;
      let itemPrice = $linkText.split('$');
      for (let i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemsPriceTotal += Number(itemPrice[i]);
      }
      _itemsTotal += itemsPriceTotal; 
      cy.log(`total price of non sale products: [${itemsPriceTotal}]`);
    }); 
    
    cy.get('@saleItemPrice').then($linkText => {
      let saleItemPrice = $linkText.split('$');
      const salesItemPrice = saleItemPrice?.reduce(
        (accumulator, currentValue) => accumulator+Number(currentValue),0
      );
      cy.log(`total of sale items: ${salesItemPrice}`);
      
      _itemsTotal = Number(_itemsTotal) + salesItemPrice;
      cy.log(`total of products price: [${_itemsTotal}]`);
    }).then(() => {
        cy.log(`the total price of all products: ${_itemsTotal}`);
        expect(_itemsTotal).to.equal(639.49);
      });    
  });

});
// cy.get('#contact-us').click({force});

