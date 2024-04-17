var showHideScoresbutton = '[class="gs-o-bullet__text sp-c-football-scores-button__text"]';
var score = '[class="gel-layout gel-layout--center qa-player-action-container"]';
class Score {

    showHideScores (text) {
       cy.get(showHideScoresbutton).invoke('text').then($text=>{
          let text = $text.trim();
          cy.get(showHideScoresbutton).should('contain', text)
       })
       cy.get(showHideScoresbutton).click()
    }

    validateScoresIsVisible () {
       cy.get(score).should('be.visible');
    }

    validateScoresIsNotVisible () {
        cy.get('body').then($body =>{
            cy.get($body).find(score).should('not.exist');
        })
     }


}

export default new Score() 