const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "s7ijwe",
  e2e: {
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
  chromeWebSecurity: false
});
