'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'newauthapp-secret',

  GOOGLE_ID:        '968838694248-p7vk8lo1f1c99novdt0e33sqmaqvcn82.apps.googleusercontent.com',
  GOOGLE_SECRET:    'lsmWC7juFvornQBYm1OEcGfz',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
