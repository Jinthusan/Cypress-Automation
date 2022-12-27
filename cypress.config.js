const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
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
    },
    specPattern:'cypress/examples/*.js'
  },
});
