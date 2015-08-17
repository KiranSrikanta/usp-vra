'use strict';

var _ = require('lodash');
var Request = require('./request.model');
var vra_message_sender = require('../../timer-jobs/vra-message-sender');

// Get list of requests
exports.index = function(req, res) {
  Request.find(function (err, requests) {
    if(err) { return handleError(res, err); }
    return res.json(200, requests);
  });
};

// Get a single request
exports.show = function(req, res) {
  Request.findById(req.params.id, function (err, request) {
    if(err) { return handleError(res, err); }
    if(!request) { return res.send(404); }
    return res.json(request);
  });
};

// Creates a new request in the DB.
exports.create = function(req, res, next) {
  Request.create(req.body, function(err, request) {
    if(err) { return handleError(res, err); }
    
    //Send the created request to the next middleware.
    req.body = request;
    next();
    //return res.json(201, request);
  });
};

// Updates an existing request in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Request.findById(req.params.id, function (err, request) {
    if (err) { return handleError(res, err); }
    if(!request) { return res.send(404); }
    var updated = _.merge(request, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, request);
    });
  });
};

// Deletes a request from the DB.
exports.destroy = function(req, res) {
  Request.findById(req.params.id, function (err, request) {
    if(err) { return handleError(res, err); }
    if(!request) { return res.send(404); }
    request.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

// Send status request messages for all requests which are not complete
exports.refresh = function(req, res, next) {
  vra_message_sender.worker().then(function(data){
    return res.json(201, data);
  }, function(err){
    return res.json(501, err);
  });
};

// Send status request messages for a request
exports.refresh_single = function(req, res, next) {
  vra_message_sender.single_worker(req.params.id).then(function(data){
    return res.json(201, data);
  }, function(err){
    return res.json(501, err);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}