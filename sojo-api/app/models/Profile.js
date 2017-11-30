'use strict';

const mongodb   = require ('@onehilltech/blueprint-mongodb')
,     String    = mongodb.Schema.Types.String
,     Number    = mongodb.Schema.Types.Number
,     ObjectId  = mongodb.Schema.Types.ObjectId
;

var schema = new mongodb.Schema ({
  full_name           : {type: String,     required: true,  trim: true},
  phone               : {type: String,     required: true,  trim: true},
  has_bill_pay_setup  : {type: Boolean,    required: false, trim: false},
  has_signed_lease    : {type: Boolean,    required: false, trim: false},
  sojo_events         : {type: [ObjectId], required: false, trim: false},
  account_id          : {type: ObjectId,   required: true,  trim: false}
});

const COLLECTION_NAME = 'profiles';
const MODEL_NAME      = 'profile';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);
