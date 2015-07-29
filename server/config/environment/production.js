'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.VCAP_APP_HOST ||
            process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    JSON.parse(process.env.VCAP_SERVICES).mongolab[0].credentials.uri ||
            process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/newauthapp'
  },

  seedDB: true,
  
  ironmq: {
    token: JSON.parse(process.env.VCAP_SERVICES).ironmq[0].credentials.token,
    project_id: JSON.parse(process.env.VCAP_SERVICES).ironmq[0].credentials.project_id,
    vra_queue_name: 'vra-queue',
    usp_queue_name: 'usp-queue'
  }
};