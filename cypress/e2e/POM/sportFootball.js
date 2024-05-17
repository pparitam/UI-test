var headingText = '.ssrcss-12t3vgg-HeadingWrapper h1';
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
            cy.get(headingText).trigger('mouseover');
            expect(headingTitle).to.contain(heading);
        });
    }
}

export default new SportFootball()