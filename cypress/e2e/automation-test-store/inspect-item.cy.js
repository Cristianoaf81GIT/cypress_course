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
    cy.get(
      '#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname'
    ).click();
  });
  
  it.only("Click on the first item using item text", () => {
    cy
      .get('.prdocutname')
      .contains('Skinsheen Bronzer Stick')
      .click().then(function(itemHeaderText) {
        console.log(`Select the following item: ${itemHeaderText.text()}`);
     });    
  });
  
  it.only("Click on the first item using item index", () => {
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
  });
});
