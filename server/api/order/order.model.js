'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderedItemSchema = new Schema({
	Title: String,
	Price: { type: Number, min: 0 },
	Quantity: { type: Number, min: 0 },
	Total: { type: Number, min: 0 },
	EstimatedDelivery: String,
	Item: [Schema.Types.ObjectId]
})

var OrderSchema = new Schema({

  CreatedOn: Date,
  RequestedBy: String,
  RequestedFor: String,
  Phone: String,
  Mobile: String,
  Status: String,
  ManagerialApprover: String,
  FinancialApprover: String,
  BillingCostCenter: String,
  Items: [OrderedItemSchema]
});

module.exports = mongoose.model('Order', OrderSchema);