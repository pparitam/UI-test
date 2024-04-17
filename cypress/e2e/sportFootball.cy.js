/// <reference types="cypress" />
import PageNavigation from "./POM/pageNavigation";
import SportFootball from "./POM/sportFootball";


describe("sports And Football page extra tests", () => {
    beforeEach(() => {
        PageNavigation.toScorenFixturePage();
    });
    it("Validate URL texts", () => {
        SportFootball.validateURLText("football");
        SportFootball.validateURLText("scores-fixtures");
    });

    it("Validate Page Titles", () => {
        SportFootball.validatePageTitle("Scores & Fixtures - Football - BBC Sport");
    });

    it("Validate page Headings", () => {
        SportFootball.validatePageHeading("Football Scores & Fixtures");
    });


});