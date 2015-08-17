'use strict';

var config = require('../config/environment');
var iron_mq = require("iron_mq");
var Requests = require('../api/request/request.model');
var mongoose = require('mongoose');
var Q = require('q');


function work_on_ironmq_messages() {
	try{
		var clientMQ = getMqClient(config.ironmq.usp_queue_name);
		
		clientMQ.get({}, function(error, body) {
			
			if(body){
				var requestJson = {};
				try{
					requestJson = JSON.parse(body.body);
				}
				catch(err){
					console.error('Message is not a valid JSON: ' + body.body + "Error: " + err);
				}
				
				if(requestJson._id){
					save_request_id(requestJson).then(deleteMessage(body), function(err){
						console.error('Error occured while updating request with id: ' + requestJson._id + 'Error: ' + err);
					});
				}
				else if(requestJson.id){
					save_request_status(requestJson).then(deleteMessage(body), function(err){
						console.error('Error occured while updating request status with vRA id: ' + requestJson.id + 'Error: ' + err);
					});
				}
				else
					console.error('Unknown message type: ' + body.body);
			}
			
		});
	}
	catch(err)
	{
		console.error('Error occured in work_on_ironmq_messages job. Error: ' + err);
	}
}


function getMqClient(queueName){
	return new iron_mq.Client({
		token: config.ironmq.token, 
		project_id: config.ironmq.project_id, 
		queue_name: queueName
	});
}


function deleteMessage(body) {
	var clientMQ = getMqClient(config.ironmq.usp_queue_name);
	clientMQ.del(body.id, function(err, body){
		if(err) console.error('Error occured while deleting message: ' + body + 'Error: ' + err);
	});
}


function save_request_id(request) {
	var deferred = Q.defer();
	Requests.findOne({'_id': mongoose.Types.ObjectId(request._id)}, function(err, requestDoc){
		if(err) deferred.reject(err);
		
		else{
			requestDoc.RequestId = request.RequestId;
			requestDoc.Status = 'IN_PROGRESS';
			requestDoc.LastUpdated = new Date();
			requestDoc.save(function (err){
				if(err) deferred.reject(err);
				else deferred.resolve(requestDoc);
			});
		}
	});
	return deferred.promise;
}


function save_request_status(request) {
	var deferred = Q.defer();
	Requests.findOne({'RequestId': request.id}, function(err, requestDoc){
		if(err) deferred.reject(err);
		
		else{
			requestDoc.Status = request.state;
			requestDoc.LastUpdated = new Date();
			requestDoc.save(function (err){
				if(err) deferred.reject(err);
				else deferred.resolve(requestDoc);
			});
		}
	});
	
	return deferred.promise;
}

var vra_message_receiver = {worker: work_on_ironmq_messages};

exports = module.exports = vra_message_receiver;