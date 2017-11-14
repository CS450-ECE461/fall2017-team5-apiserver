'use strict';

const mongodb   = require ('@onehilltech/blueprint-mongodb')
,     String    = mongodb.Schema.Types.String
,     Number    = mongodb.Schema.Types.Number
,     ObjectId  = mongodb.Schema.Types.ObjectId
;

var schema = new mongodb.Schema ({
  user_id              : {type: Number, required: true, trim: true},
  rent_amount          : {type: Number, required: true, trim: true},
  start_date           : {type: Date, required: true, trim: true},
  end_date             : {type: Date, required: true, trim: true},
  apartment_complex_id : {type: ObjectId, required: true, trim: true}
});

const COLLECTION_NAME = 'leases';
const MODEL_NAME = 'lease';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);