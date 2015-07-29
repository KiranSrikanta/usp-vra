'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RequestSchema = new Schema({
  Service: String,
  RequestId: String,
  Status: String,
  PercentComplete: Number,
  TaskId: String,
  Form: Schema.Types.Mixed
});

module.exports = mongoose.model('Request', RequestSchema);