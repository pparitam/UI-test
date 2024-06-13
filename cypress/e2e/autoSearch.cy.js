/// <reference types="cypress" />
import PageNavigation from "./POM/pageNavigation";
import Search from "./POM/search";

describe("AutoSearch", () => {
    beforeEach(() => {
        PageNavigation.toScorenFixturePage();
    })
    it("To validate AutoSearch Functionality", () => {
       Search.autoSearch('Football');
       Search.validateAutosearchTextis('Football');
       Search.validateResultPageContains('Football')
    })
})