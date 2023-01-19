/// <reference types="Cypress" />

const urls = [
  "http://www.webdriveruniversity.com/",
  "http://www.webdriveruniversity.com/Contact-Us/contactus.html",
  "https://www.automationteststore.com/",
];

describe("Selector examples", () => {
  let url = "";

  beforeEach(() => {
    url = urls[1];
    cy.visit(url);
  });

  it("Examples of Selectors via webdriver uni contact us page", () => {
    // by tag name
    cy.get("input");
    // by attribute name and value
    cy.get("input[name='first_name']");
    // by id
    cy.get("#contact_me");
    // by class
    cy.get(".feedback-input");
    // by multiple classes
    cy.get("[class='navbar navbar-inverse navbar-fixed-top']");
    // by tow different attributes
    cy.get("[name='email'][placeholder='Email Address']");
    // by xpath
    cy.xpath("//input[@name='first_name']");
  });
});
