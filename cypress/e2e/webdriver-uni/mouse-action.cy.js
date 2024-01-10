/// <reference types="cypress"/>

describe("Test mouse actions", () => {
  it("Scroll element into view", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

  it("I should be able to drag and drop a draggable item", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });
});
