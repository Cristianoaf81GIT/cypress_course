/// <reference types="cypress"/>

describe('Verify checkboxes via webdriveruni', () => {
  it('check and validate checkbox', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
    
//    cy.get('#checkboxes > :nth-child(1) > input').check()
//    cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
//    cy.get('#checkboxes > :nth-child(3) > input').should('not.be.checked')
    
    cy.get('#checkboxes > :nth-child(3) > input').as('option-1')
    // cy.get('@option-1').check()
    cy.get('@option-1').check().should('be.checked')
  })

})
