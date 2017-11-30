'use strict';

const mongodb   = require ('@onehilltech/blueprint-mongodb')
,     String    = mongodb.Schema.Types.String
,     Number    = mongodb.Schema.Types.Number
,     ObjectId  = mongodb.Schema.Types.ObjectId
;

var schema = new mongodb.Schema ({
  account_id     : {type: ObjectId, required: true, trim: false},
  amount_paid    : {type: Number,   required: true, trim: true},
  date_paid      : {type: Date,     required: true, trim: true},
  company_id     : {type: ObjectId, required: true, trim: false},
  payment_type   : {type: String,   required: true, trim: true},
  payment_object : {type: ObjectId, required: true, trim: false}
});

const COLLECTION_NAME = 'payments';
const MODEL_NAME      = 'payment';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);
