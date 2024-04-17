/// <reference types="cypress" />
import PageNavigation from "./POM/pageNavigation";
import Search from "./POM/search";

describe("AutoSearch", () => {
    beforeEach(() => {
        PageNavigation.toScorenFixturePage();
    })
    it("To validate AutoSearch Functionality", () => {
       Search.autoSearch('AC Milan');
       Search.validateAutosearchTextis('AC Milan');
       Search.validateResultPageContains('AC Milan')
    })
})