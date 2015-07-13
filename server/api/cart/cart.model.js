'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
  Id: String,
  Qty: { type: Number, min: 0 },
  Price: { type: Number, min: 0 }
});

var CartSchema = new Schema({
  UserName: String,
  Item: [ItemSchema]
});

module.exports = mongoose.model('Cart', CartSchema);