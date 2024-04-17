/// <reference types="cypress" />
import PageNavigation from "./POM/pageNavigation";
import Search from "./POM/search";

describe("Articles related to Sports", () => {
    beforeEach(() => {
        PageNavigation.toScorenFixturePage();
    })
    it("To validate articles on Sports", () => {
        Search.sportsArticles("Sports");
        Search.firstArticleHeading();
        Search.lastArticleHeading();
    })
})