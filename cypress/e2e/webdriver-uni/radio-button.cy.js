/// <reference types="Cypress"/>


describe('Verify radio buttons via webdriveruni', () => {
  it('Check specific radio buttons', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
    cy.get('#radio-buttons').find('[type="radio"]').first().check()

    cy.get('#radio-buttons').find('[type="radio"]').eq(1).check()
    cy.get('#radio-buttons').find('[type="radio"]').check('yellow')
  })

  it('Validate the states of specific radio buttons', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true })

    cy.get('[value="lettuce"]').should('not.be.checked')
    cy.get('[value="cabbage"]').should('be.disabled')
    cy.get('[value="pumpkin"]').should('be.checked')

    cy.get('[value="lettuce"]').check().should('be.checked')
    cy.get('[value="pumpkin"]').should('not.be.checked')
    cy.get('[value="cabbage"]').should('be.disabled').should('not.be.checked')
  })
})
