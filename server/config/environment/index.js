'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 9000,

  // Server port SSL
  portSSL: process.env.PORTSSL || 9001,

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'new-auth-app-secret'
  },

  // List of user roles
  userRoles: ['guest', 'user', 'admin'],

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

  google: {
    clientID:     process.env.GOOGLE_ID || '968838694248-p7vk8lo1f1c99novdt0e33sqmaqvcn82.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || 'lsmWC7juFvornQBYm1OEcGfz',
    callbackURL:  (process.env.DOMAIN || 'localhost:9000') + '/auth/google/callback'
  },
  
  timer_job_schedules: {
    sender: process.env.SENDER_TIMER_SCHEDULE || '0 */6 * * * *',
    receiver: process.env.RECEIVER_TIMER_SCHEDULE || '0 */5 * * * *'
  }
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {});