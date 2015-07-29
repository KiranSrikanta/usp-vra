'use strict';

var config = require('../config/environment');
var iron_mq = require("iron_mq");

function sendMessageOnVRAqueue(req, res) {
	var clientMQ = new iron_mq.Client({token: config.ironmq.token, project_id: config.ironmq.project_id, queue_name: config.ironmq.vra_queue_name});
	clientMQ.post(JSON.stringify(req.body._doc), function(error, body) {
		if(error) { return res.send(500, error); }
		res.send(req.body);
	});
}

exports.sendMessageOnVRAqueue = sendMessageOnVRAqueue;