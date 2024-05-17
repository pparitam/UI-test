const currentDate = new Date();

// Format the date to match your data attribute format
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const yesterday = String(currentDate.getDate() - 1).padStart(2, '0');
const formattedDate = `${year}-${month}-${yesterday}`;
const tomorrow = String(currentDate.getDate() + 1).padStart(2, '0');

const nextDate = `${year}-${month}-${tomorrow}`;
// Create the dynamic locator
var pastDay = `[data-date="${formattedDate}"]`;
var nextDay = `[data-date="${nextDate}"]`;
class PageNavigation {

  toScorenFixturePage() {
    cy.visit("/")
  }

  clickPastDay() {
    cy.get(pastDay).click()
  }

  clickNextDate() {
    cy.get(nextDay).click()

  }
}

export default new PageNavigation();