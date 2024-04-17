/// <reference types="cypress" />
import PageNavigation from "./POM/pageNavigation";
import score from "./POM/score";

describe("To validate show hide score functionality", () => {
    beforeEach(() => {
        PageNavigation.toScorenFixturePage();
    })

    it("To validate Score visiblity on the Show scorer button status", () => {
        PageNavigation.clickPastDay();
        // For the first time score should not be visible
        score.validateScoresIsNotVisible();
        // score should be  visible when Show Scorer button is pressed
        score.showHideScores('Show scorers');
        score.validateScoresIsVisible();
        // Score should hide again when hide Scorer button is pressed
        score.showHideScores('Hide scorers');
        score.validateScoresIsNotVisible();
    })


})