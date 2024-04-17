class pageNavigation {

    toScorenFixturePage() {
      cy.visit("/")
    }

    clearSessionCookies() {
      cy.clearCookies();
    }
  
  }
  
  export default new pageNavigation();