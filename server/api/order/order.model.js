'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
  RequestedBy: String,
  RequestedFor: String,
  Phone: String,
  Mobile: String,
  Items: [Schema.Types.ObjectId],
  Status: String
});

module.exports = mongoose.model('Order', OrderSchema);