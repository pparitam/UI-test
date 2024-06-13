var showHideScoresbutton = '.ssrcss-1kvs5az-AlignRight > .ssrcss-1y6d8b7-Button';
var score = '[class="ssrcss-7kpa5o-StyledUl e1rfo1x0"]';
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