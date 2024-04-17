const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.bbc.co.uk/sport/football/scores-fixtures",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
