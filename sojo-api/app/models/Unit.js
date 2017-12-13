'use strict';

const mongodb   = require ('@onehilltech/blueprint-mongodb')
,     String    = mongodb.Schema.Types.String
,     Number    = mongodb.Schema.Types.Number
,     ObjectId  = mongodb.Schema.Types.ObjectId
;

var schema = new mongodb.Schema ({
  unit_index        : {type: String,   required: true,  trim: true},
  building_index    : {type: String,   required: true,  trim: true},
  address           : {type: String,   required: true,  trim: true},
  city              : {type: String,   required: true,  trim: true},
  state             : {type: String,   required: true,  trim: true},
  zip               : {type: Number,   required: true,  trim: true},
  maintenance_email : {type: String,   required: true,  trim: true},
  landlord_email    : {type: String,   required: true,  trim: true},
  account_id        : {type: ObjectId, required: false, trim: false}
});

const COLLECTION_NAME = 'units';
const MODEL_NAME      = 'unit';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);
