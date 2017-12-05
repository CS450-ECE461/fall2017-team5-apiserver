'use strict';

const mongodb   = require ('@onehilltech/blueprint-mongodb')
,     String    = mongodb.Schema.Types.String
,     Number    = mongodb.Schema.Types.Number
,     ObjectId  = mongodb.Schema.Types.ObjectId
;

var schema = new mongodb.Schema ({
  rent_amount : {type: Number,   required: true,  trim: true},
  lease_type  : {type: String,   required: true,  trim: true},
  start_date  : {type: Date,     required: true,  trim: true},
  end_date    : {type: Date,     required: true,  trim: true},
  account_id  : {type: ObjectId, required: false, trim: false}
});

const COLLECTION_NAME = 'leases';
const MODEL_NAME      = 'lease';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);
