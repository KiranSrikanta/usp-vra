'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
  Id: String,
  Title: String,
  Qty: { type: Number, min: 0 },
  Price1: { type: Number, min: 0 },
  Capacity1: String,
  Price2: { type: Number, min: 0 },
  Capacity2: String,
  DefaultImage: String
});

var CartSchema = new Schema({
  UserName: String,
  SubTotal: String,
  ExpectedDelivery: String,
  Item: [ItemSchema]
});

module.exports = mongoose.model('Cart', CartSchema);