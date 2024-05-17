/// <reference types="cypress" />
import pageNavigation from "./POM/pageNavigation";

describe('Business User Scenarios', () => {
    beforeEach(() => {
        pageNavigation.toScorenFixturePage()
    })
    it('As a business user, I would like to make a record of all teams which are playing today', () => {
        // pageNavigation.clickPastDay()
        // cy.wait(1000)
        cy.get('body').then($body => {
            // If the element doesn't exist, then print no matches today
            if ($body.find('.ssrcss-1csjnqe-StyledTime').length <= 0) {
                cy.log('No matches today');
            } else {
                // If matches available then print log to check the matches list
                cy.get('.ssrcss-1csjnqe-StyledTime').then($matchesToday => {
                    if ($matchesToday.length > 0) {
                        const noOfMatch = $matchesToday.length;
                        cy.log(`Today ${noOfMatch} matches will happen`)

                    }
                })
                // Verify that matches names are visible
                cy.get('.ssrcss-15urrud-StyledHeadToHeadWrapper').then($activeMatch => {
                    cy.get($activeMatch).find('.ssrcss-93qnvo-StyledTeam-HomeTeam').should('be.visible')
                    cy.get($activeMatch).find('.ssrcss-19knk4k-StyledTeam-AwayTeam').should('be.visible')

                })

            }
        });
    });
});