/// <reference types="cypress" />
import PageNavigation from "./POM/pageNavigation";
import Search from "./POM/search";

describe("As a sports user, I would like to read about all articles related to sports", () => {
    beforeEach(() => {
        PageNavigation.toScorenFixturePage();
    })
    it("To validate articles on Sports and get first and last heading from the page", () => {
        Search.sportsArticles("Sports");
        Search.firstArticleHeading();
        Search.lastArticleHeading();
    })
})