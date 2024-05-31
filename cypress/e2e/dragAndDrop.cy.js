/// <reference types="cypress" />


describe("AutoSearch", () => {

    it("To validate Drag and Drop Functionality", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
      cy.visit("https://demoqa.com/droppable/")
      cy.get('#draggable').drag('#droppable', {
        source: { x: 138, y: 24 }, // applies to the element being dragged
        target: { position: 'right' }, // applies to the drop target
        force: true, // applied to both the source and target element
      })
    })
})