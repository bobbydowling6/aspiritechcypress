const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    on('task', {
      log(message) {
        console.log(message)
        return null
      },
      table(message) {
        console.log(message)
        return null
      },
    })
    },
  },
});
