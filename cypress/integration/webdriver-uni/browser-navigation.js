/// <reference types="Cypress"/>

const doc = "https://docs.cypress.io/api/table-of-contents";
const urls = [
  "http://www.webdriveruniversity.com/",
  "http://www.webdriveruniversity.com/Contact-Us/contactus.html",
  "https://www.automationteststore.com/",
];

describe("Validate webdriver uni homepage links", () => {
  // let webdriveruniversity = "";
 
  it("Confirm links redirect to correct pages", () => {
    cy.visit(urls[0]);
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
    cy.url().should('include', 'contactus');

    // perform browser actions
    cy.go('back');
    // reload de page
    cy.reload();
    // cy.reload(true); // reload page without using cache
    
    cy.url().should('include', 'http://www.webdriveruniversity.com/');
    
    cy.go('forward'); // return to homepage
    cy.url().should('include', 'contactus');

    cy.go('back');
    cy.get('#login-portal').invoke('removeAttr', 'target').click({force: true});
    cy.url().should('include', 'Login-Portal');
    cy.go('back');
  });
});
