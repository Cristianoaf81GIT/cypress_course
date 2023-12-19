/// <reference types="cypress"/>

describe('Test mouse actions', () => {

  it('Scroll element into view', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})

  })
})
