
var headerSearch = '[role="search"] a';
var searchField = '#searchInput';
var searchResult = ".e42f8510.ssrcss-1un9fz5-WrapWithWidth > ul[role='list']";
var articleTitle = "li .ssrcss-its5xf-PromoLink span";

class search  {
    sportsArticles (text){
      cy.get(headerSearch).click().then(() => {
        cy.wait(1000)
        cy.get(searchField).type(text).type('{enter}').then(($el) => {
            cy.get(searchResult).should('be.visible');
        })
    })
    }

    findHeading () {
       cy.get(searchResult).find(articleTitle)
    } 

    firstArticleHeading () {
      cy.get(searchResult).find(articleTitle).first().invoke('text').then( text => {
         cy.log(`${text}`)
      })
    }

    lastArticleHeading () {
      cy.get(searchResult).find(articleTitle).last().invoke('text').then( text => {
         cy.log(`${text}`)
      })
    }
  }

  export default new search();
