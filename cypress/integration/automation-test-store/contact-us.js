/// <reference types="Cypress"/>

const urls = [
  "http://www.webdriveruniversity.com/",
  "http://www.webdriveruniversity.com/Contact-Us/contactus.html",
  "https://www.automationteststore.com/",
];

describe("Test Contact Us form via Automation Test Store", () => {
  beforeEach(() => {
    cy.visit(urls[2]);
  });

  it("Should be able to submit a successfull submission via contact us form", () => {});
});
