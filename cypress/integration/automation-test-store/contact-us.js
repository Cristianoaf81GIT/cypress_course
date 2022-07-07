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

  it("Should be able to submit a successfull submission via contact us form", () => {
    cy.get("a[href$='contact']").click();
    // cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get("#ContactUsFrm_first_name").type("Joe");
    cy.get("#ContactUsFrm_email").type("joe_blog@gmail.com");
    cy.get("#ContactUsFrm_enquiry").type(
      "Do you provide additional discount on bulk orders?"
    );
    cy.get(".col-md-6 > .btn").click();
  });
});
