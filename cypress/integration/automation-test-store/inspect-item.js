/// <reference types="Cypress"/>

/*
 *docs {@link https://docs.cypress.io/guides/references/assertions#Chai-jQuery}
 * */

const urls = [
  "http://www.webdriveruniversity.com/",
  "http://www.webdriveruniversity.com/Contact-Us/contactus.html",
  "https://www.automationteststore.com/",
];

describe("Inspect Automation Test Store items using chain of commands", () => {
  beforeEach(() => {
    cy.visit(urls[2]);
  });

  it("Click on the first item using item header", () => {
      cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();           
  });

   it("Click on the first item usind item text", () => {
      cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
   });


});
