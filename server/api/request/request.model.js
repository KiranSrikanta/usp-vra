'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RequestSchema = new Schema({
  Service: String,
  RequestId: String,
  Status: String,
  PercentComplete: Number,
  TaskId: String,
  LastUpdated: { type: Date, default: Date.now },
  Form: Schema.Types.Mixed
});

module.exports = mongoose.model('Request', RequestSchema);