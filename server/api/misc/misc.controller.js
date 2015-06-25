'use strict';

var _ = require('lodash');
var Misc = require('./misc.model');

// Get list of miscs
exports.index = function(req, res) {
  Misc.find(function (err, miscs) {
    if(err) { return handleError(res, err); }
    return res.json(200, miscs);
  });
};

// Get a single misc
exports.show = function(req, res) {
  Misc.findById(req.params.id, function (err, misc) {
    if(err) { return handleError(res, err); }
    if(!misc) { return res.send(404); }
    return res.json(misc);
  });
};

// Creates a new misc in the DB.
exports.create = function(req, res) {
  Misc.create(req.body, function(err, misc) {
    if(err) { return handleError(res, err); }
    return res.json(201, misc);
  });
};

// Updates an existing misc in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Misc.findById(req.params.id, function (err, misc) {
    if (err) { return handleError(res, err); }
    if(!misc) { return res.send(404); }
    var updated = _.merge(misc, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, misc);
    });
  });
};

// Deletes a misc from the DB.
exports.destroy = function(req, res) {
  Misc.findById(req.params.id, function (err, misc) {
    if(err) { return handleError(res, err); }
    if(!misc) { return res.send(404); }
    misc.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}