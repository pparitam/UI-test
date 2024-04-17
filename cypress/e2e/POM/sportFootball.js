var headingText = '.gs-c-promo-heading h1';
class SportFootball {
    validateURLText(text) {
        cy.url().then(currentURL => {
            expect(currentURL).to.include(text);
        })
    }

    validatePageTitle(title) {
        cy.title().should('include', title);
    }

    validatePageHeading(heading) {
        cy.get(headingText).invoke('text').then(headingTitle => {
            expect(headingTitle).to.contain(heading);
        });
    }
}

export default new SportFootball()