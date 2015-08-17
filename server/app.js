/// <reference path="../typings/node/node.d.ts"/>
/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');

var fs = require('fs');

if(process.env.NODE_ENV === 'development'){
	var privateKey  = fs.readFileSync('server/sslcert/server.key', 'utf8');
	var certificate = fs.readFileSync('server/sslcert/server.crt', 'utf8');
	var credentials = {key: privateKey, cert: certificate};
}
// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Start server https only dev!
if(process.env.NODE_ENV === 'development'){
	var serverSSL = require('https').createServer(credentials, app);
	serverSSL.listen(config.portSSL, config.ip, function () {
	  console.log('Express server listening on %d, in %s mode', config.portSSL, app.get('env'));
	});
}

//Start timer job
var CronJob = require('cron').CronJob;
var message_receiver = require('./timer-jobs/vra-message-receiver');
//Runs every 10 mins
var ironmq_scheduled_job = new CronJob({
	cronTime: config.timer_job_schedules.receiver,
	onTick: message_receiver.worker,
	start: true
});

// Expose app
exports = module.exports = app;