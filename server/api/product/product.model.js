'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
	Author: String,
	Created: Date,
	Title: String,
	Comment: String,
	Rating: { type: Number, min: 0, max: 5 }
});

var ProductSchema = new Schema({
  Title: String,
  Images: [String],
  Features: String,
  Rating: { type: Number, min: 0, max: 5 },
  Reviews: [ReviewSchema],
  WeightAndDimension: [String],
  Specification: [String],
  Price: { type: Number, min: 0 },
  FeaturedItem: Boolean,
  TopProduct: Boolean,
  ItemCategory: [String],
  DefaultImage: String
});

module.exports = mongoose.model('Product', ProductSchema);