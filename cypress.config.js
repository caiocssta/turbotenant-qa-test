const { defineConfig } = require('cypress')

module.exports = defineConfig({
  screenshotOnRunFailure: false,
  video: false,
  defaultCommandTimeout: 15000,
  // retries: {
  //   runMode: 1,
  //   openMode: 1,
  // },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://qa-app-api.dev.turbotenant.com/',
    specPattern: 'cypress/tests/**/*.spec.js',
  },
})
