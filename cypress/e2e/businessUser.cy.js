/// <reference types="cypress" />
import pageNavigation from "./POM/pageNavigation";

describe('Business User Scenarios', () => {
    beforeEach(() => {
        pageNavigation.toScorenFixturePage()
    })
    it('As a business user, I would like to make a record of all teams which are playing today', () => {
        cy.get('body').then($body => {
            // If the element doesn't exist, then print no matches today
            if (!$body.find(`.ssrcss-uizd8o-StyledTime`).empty()) {
                cy.log('No matches today');
            } else {
            // If matches available then print log to check the matches list
                cy.get('.ssrcss-uizd8o-StyledTime').invoke('show').then($matchesToday => {
                    if ($matchesToday.length > 0) {
                        const noOfMatch = $matchesToday.length;
                        cy.log(`Please check the list of Today's ${noOfMatch} matches`)
                    }
                })
            // Verify that matches names are visible
            cy.get('[class="ssrcss-15urrud-StyledHeadToHeadWrapper e64wp3e1"]').should('not.be.empty').then(ele=>{
                cy.get(ele).find('[class="visually-hidden ssrcss-1f39n02-VisuallyHidden e16en2lz0"]').invoke('text').then(headTeam=>{
                    cy.log('-->'+headTeam +'/n')
                })
            })
            
            }
        });
    });
});
