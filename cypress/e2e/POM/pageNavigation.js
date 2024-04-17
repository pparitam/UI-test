var pastDay = 'ul#sp-timeline-past-dates li a.sp-c-date-picker-timeline__item-inner:last';
class PageNavigation {

    toScorenFixturePage() {
      cy.visit("/")
    }

    clearSessionCookies() {
      cy.clearCookies();
    }
    
    clickPastDay() {
      cy.get(pastDay).click()
     }
  }
  
  export default new PageNavigation();