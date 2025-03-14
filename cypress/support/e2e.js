// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
if (Cypress.config('hideXHRInCommandLog')) {
    const app = window.top;
  
    if (
      app &&
      !app.document.head.querySelector('[data-hide-command-log-request]')
    ) {
      const style = app.document.createElement('style');
      style.innerHTML =
        '.command-name-request, .command-name-xhr { display: none }';
      style.setAttribute('data-hide-command-log-request', '');
  
      app.document.head.appendChild(style);
    }
  }

const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
  if (
    opts.displayName === 'fetch' &&
    opts.url.startsWith("https://www.boohoo.com")
  ) {
    return
  }
  return origLog(opts, ...other)
}