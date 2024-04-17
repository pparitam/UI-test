/// <reference types="cypress" />
import pageNavigation from "./POM/pageNavigation";

describe('Business User Scenarios', () => {
    beforeEach(() => {
        pageNavigation.toScorenFixturePage()
    })
    it('As a business user, I would like to make a record of all teams which are playing today', () => {
        cy.get('body').then($body => {
            // If the element doesn't exist, then print no matches today
            if (!$body.find('.sp-c-fixture__number.sp-c-fixture__number--time').empty()) {
                cy.log('No matches today');
            } else {
            // If matches available then print log to check the matches list
                cy.get('.sp-c-fixture__number.sp-c-fixture__number--time').then($matchesToday => {
                    if ($matchesToday.length > 0) {
                        const noOfMatch = $matchesToday.length;
                        cy.log(`Please check the list of Today's ${noOfMatch} matches`)
                    }
                })
            // Verify that matches names are visible
            cy.get('.sp-c-fixture__team--time-home').invoke('text').should('not.be.empty')
            cy.get('.sp-c-fixture__team--time-away').invoke('text').should('not.be.empty')
            }
        });
    });
});