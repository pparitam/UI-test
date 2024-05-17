var headerSearch = '[role="search"] a';
var searchField = '#searchInput';
var searchResult = ".e42f8510.ssrcss-1un9fz5-WrapWithWidth > ul[role='list']";
var articleTitle = "li .ssrcss-its5xf-PromoLink span";
var autoSearchField = '[class="sp-c-search"] [role="search"]';
var autoSearchResult = '[id="search-results"]';
var autoSerachValue = '[class="sp-c-search__result-item"]';
var autoSearchListingPage = '.sp-c-fixture__wrapper'

class Search {
  sportsArticles(text) {
    cy.get(headerSearch).click().then(() => {
      cy.wait(1000)
      cy.get(searchField).type(text).type('{enter}').then(($el) => {
        cy.get(searchResult).should('be.visible');
      })
    })
  }

  findHeading() {
    cy.get(searchResult).find(articleTitle);
  }

  firstArticleHeading() {
    cy.get(searchResult).find(articleTitle).first().invoke('text').then(text => {
      cy.log(`${text}`);
    })
  }

  lastArticleHeading() {
    cy.get(searchResult).find(articleTitle).last().invoke('text').then(text => {
      cy.log(`${text}`)
    })
  }

  autoSearch(text) {
    cy.get(autoSearchField).type(text).then(() => {
      cy.get(autoSearchResult).should('exist');
    })
  }

  validateAutosearchTextis(text) {
    cy.get(autoSerachValue).then(($el) => {
      cy.wrap($el).eq(0).invoke('text').should('contain', text)
    })
  }

  validateResultPageContains(text) {
    cy.get(autoSerachValue).then(($el) => {
      cy.wrap($el).eq(0).click()
    })
    cy.get(autoSearchListingPage).contains(text)
  }
}

export default new Search();