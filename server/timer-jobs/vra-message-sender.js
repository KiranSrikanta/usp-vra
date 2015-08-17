'use strict';

var config = require('../config/environment');
var iron_mq = require("iron_mq");
var Requests = require('../api/request/request.model');
var mongoose = require('mongoose');
var Q = require('q');


function getMqClient(queueName){
	return new iron_mq.Client({token: config.ironmq.token, project_id: config.ironmq.project_id, queue_name: queueName});
}

function work_on_inprogress_requests() {
	var deferred = Q.defer();
	
	Requests.find({"Status": {"$ne": "SUCCESSFUL"}}, function(err, data){
		if(err) {
			console.error("Error occured in finding requests. Error: " + err);
			deferred.reject(err);
		}
		if(data){
			var allPostsOutcome = [];
			var index = 0;
			data.forEach(function(request) {
				allPostsOutcome[index++] = postMessage(request);
			}, this);
			
			Q.all(allPostsOutcome).then(function(data){
				deferred.resolve(data);
			}, function(err){
				deferred.reject(err);
			})
		}
		else
			deferred.resolve([]);
	});
	
	return deferred.promise;
}

function work_on_request(requestId) {
	var deferred = Q.defer();
	
	Requests.findOne({'_id': mongoose.Types.ObjectId(requestId)}, function(err, request){
		if(err) {
			console.error("Error occured in finding requests. Error: " + err);
			deferred.reject(err);
		}
		if(request){
			postMessage(request).then(function(data){
				deferred.resolve(data);
			}, function(err){
				console.error("Error occured in posting message. Error: " + err);
				deferred.reject(err);
			});
		}
	});
	
	return deferred.promise;
}

function postMessage(request) {
	var deferred = Q.defer();
	
	var ClientMQ = new iron_mq.Client({
		token: config.ironmq.token, 
		project_id: config.ironmq.project_id, 
		queue_name: config.ironmq.vra_queue_name
	});
		
	ClientMQ.post(JSON.stringify(request), function(err, body){
		if(err)
			deferred.reject(err);
		else
			deferred.resolve(body);
	});
	
	return deferred.promise;
}

var vra_message_sender = {
	worker: work_on_inprogress_requests, 
	single_worker: work_on_request
};

exports = module.exports = vra_message_sender;