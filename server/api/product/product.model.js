'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CapacityAndPriceSchema = new Schema({
	Capacity: String,
	Price: { type: Number, min: 0 }
});

var ReviewSchema = new Schema({
	Author: String,
	Created: Date,
	Title: String,
	Comment: String,
	Rating: { type: Number, min: 0, max: 5 }
});

var ProductSchema = new Schema({
  Title: String,
  CapacityAndPrice: [CapacityAndPriceSchema],
  Features: String,
  Specifications: [String],
  WeightAndDimensions: [String],
  WeightAndDimensionsImage: String,
  Rating: { type: Number, min: 0, max: 5 },
  Review: [ReviewSchema],
  PublishingImage: String,
  Thumbnail1: String,
  Thumbnail2: String,
  Thumbnail3: String
});

module.exports = mongoose.model('Product', ProductSchema);