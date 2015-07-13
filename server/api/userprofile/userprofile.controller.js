'use strict';

var _ = require('lodash');
var Userprofile = require('./userprofile.model');

// Get list of userprofiles
exports.index = function(req, res) {
  Userprofile.find(function (err, userprofiles) {
    if(err) { return handleError(res, err); }
    return res.json(200, userprofiles);
  });
};

// Get a single userprofile
exports.show = function(req, res) {
  Userprofile.findById(req.params.id, function (err, userprofile) {
    if(err) { return handleError(res, err); }
    if(!userprofile) { return res.send(404); }
    return res.json(userprofile);
  });
};

// Creates a new userprofile in the DB.
exports.create = function(req, res) {
  Userprofile.create(req.body, function(err, userprofile) {
    if(err) { return handleError(res, err); }
    return res.json(201, userprofile);
  });
};

// Updates an existing userprofile in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Userprofile.findById(req.params.id, function (err, userprofile) {
    if (err) { return handleError(res, err); }
    if(!userprofile) { return res.send(404); }
    var updated = _.merge(userprofile, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, userprofile);
    });
  });
};

// Deletes a userprofile from the DB.
exports.destroy = function(req, res) {
  Userprofile.findById(req.params.id, function (err, userprofile) {
    if(err) { return handleError(res, err); }
    if(!userprofile) { return res.send(404); }
    userprofile.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}