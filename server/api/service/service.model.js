'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ServiceSchema = new Schema({
  _id: String,
  Name: String,
  Image: String,
  FormDefault: Schema.Types.Mixed
});

module.exports = mongoose.model('Service', ServiceSchema);