//var pastDay = 'ul#sp-timeline-past-dates li a.sp-c-date-picker-timeline__item-inner:last';
const currentDate = new Date();

// Format the date to match your data attribute format
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const yesterday = String(currentDate.getDate() - 1).padStart(2, '0');
const formattedDate = `${year}-${month}-${yesterday}`;
const tomorrow = String(currentDate.getDate() + 1).padStart(2, '0');

const nextDate = `${year}-${month}-${tomorrow}`;
// Create the dynamic locator
var pastDay = `[data-testid="datepicker-date-link-${formattedDate}"]`;
var nextDay = `[data-date="${nextDate}"]`;

//data-testid="datepicker-date-link-2024-06-11"
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