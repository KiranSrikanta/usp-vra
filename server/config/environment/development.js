'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/newauthapp-dev'
  },

  seedDB: true,
  
  ironmq: {
    token: 'dyM7fJMKZtjx-Qd5pkUfOb-Boak',
    project_id: '55b5ba3a258a0c0006000024',
    vra_queue_name: 'vra-queue',
    usp_queue_name: 'usp-queue'
  }
};
