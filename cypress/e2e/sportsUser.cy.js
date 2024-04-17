/// <reference types="cypress" />
import pageNavigation from "./POM/pageNavigation";
import search from "./POM/search";

describe("Articles related to Sports", () => {
    beforeEach(() => {
        //pageNavigation.toScorenFixturePage()
    })
    it("To validate articles on Sports", () => {
        pageNavigation.toScorenFixturePage()
        search.sportsArticles("Sports")
        search.firstArticleHeading()
        search.lastArticleHeading()
    })
})