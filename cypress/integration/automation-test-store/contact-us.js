/// <reference types="Cypress"/>

/*
 *docs {@link https://docs.cypress.io/guides/references/assertions#Chai-jQuery}
 * */

const urls = [
  "http://www.webdriveruniversity.com/",
  "http://www.webdriveruniversity.com/Contact-Us/contactus.html",
  "https://www.automationteststore.com/",
];

describe("Test Contact Us form via Automation Test Store", () => {
  beforeEach(() => {
    cy.visit(urls[2]);
  });

  it.only("Should be able to submit a successfull submission via contact us form", () => {
    cy.get("a[href$='contact']").click();
    // cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get("#ContactUsFrm_first_name").type("Joe");
    cy.get("#ContactUsFrm_email").type("joe_blog@gmail.com");
    cy.get("#ContactUsFrm_email").should('have.attr', 'name', 'email');
    cy.get('#ContactUsFrm_email').should('have.value', 'joe_blog@gmail.com');
    cy.get("#ContactUsFrm_enquiry").type(
      "Do you provide additional discount on bulk orders?"
    );
    cy.get(".col-md-6 > .btn").click();
    cy.get('.mb40 > :nth-child(3)').should(
      'have.text',
      'Your enquiry has been successfully sent to the store owner!'
    );
    cy.log("Test has completed!");
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Tom");
    cy.get('[name="last_name"]').type("blogs");
    cy.get('textarea.feedback-input').type("How can I learn Cypress?")
    cy.get('[type="submit"]').click();
  });

});
