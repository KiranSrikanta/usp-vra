'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserprofileSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  ManagerialApprover1: String,
  ManagerialApprover2: String,
  FinancialApprover1: String,
  FinancialApprover2: String,
  CostCenter: String
});

module.exports = mongoose.model('Userprofile', UserprofileSchema);