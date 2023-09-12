/// <reference types="Cypress"/>   

/*
 *docs {@link https://docs.cypress.io/guides/references/assertions#Chai-jQuery}
 * */

const urls = [
  "http://www.webdriveruniversity.com/",
  "http://www.webdriveruniversity.com/Contact-Us/contactus.html",
  "https://www.automationteststore.com/",
];

describe("Verifying variables, cypress commands and jquery commands", () => {
  beforeEach(() => {
    cy.visit(urls[2]);
  });

  it("Navigating to specific product pages", () => {
    // dont works
    /*const makupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
    const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
    makupLink.click();
    skincareLink.click();
  
    // works
    const makupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
    makupLink.click();
    const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare"); 
    skincareLink.click();*/
    
    // recomended approach
    cy.get("a[href*='product/category&path=']").contains("Makeup");
    cy.get("a[href*='product/category&path=']").contains("Skincare");

  });

  it("Navigating to specific product pages",  () => {
    cy.get("a[href*='product/category&path=']").contains("Makeup");
  
    // Following code will fail
    /*const header = cy.get("h1 .maintext");*/
    /*cy.log(header.text());*/
    
    cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').then(($headerText) => {
      const headerText = $headerText.text().trim();
      cy.log(`found headertext: ${JSON.stringify(headerText)}`);
      expect(headerText).is.eq('Makeup');
    });
     
  });

  
  it.only('Validate properties of contact us page', () => {
    cy.visit('https://automationteststore.com/index.php?rt=content/contact');

    // Uses cypress commands chaining
    cy.contains('#ContactUsFrm', 'Contact Us Form')
      .find('#field_11')
      .should('contain', 'First name');
  
    // Jquery approach
    cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
      const firstNameText = text.find('#field_11').text();
      expect(firstNameText).to.contain('First name');

      // Embedded commands (Closures)
      cy.get('#field_11').then(fnText => {
        cy.log(fnText.text());
        cy.log(JSON.stringify(fnText));
      }); 
    });


    // Embedded commands (Closures)

  });

});
