/// <reference types="cypress" />
import PageNavigation from "./POM/pageNavigation";
import score from "./POM/score";

describe("As a QA, I would like to verify Show and Hide Scorers toggle on the page", () => {
    beforeEach(() => {
        PageNavigation.toScorenFixturePage();
    })

    it("To validate Score visiblity on the Show scorer on the change of the state of the button", () => {
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
