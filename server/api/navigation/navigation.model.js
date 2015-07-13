'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SubMenuSchema = new Schema({
	Title: String
});

var NavigationSchema = new Schema({
  Title: String,
  SubMenu:[SubMenuSchema]
});

module.exports = mongoose.model('Navigation', NavigationSchema);