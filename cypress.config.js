const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env:{
    URL: "https://demoqa.com"
  },
  retries: {
    runMode: 1
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern:'cypress/examples/*.js'
  },
});
