'use strict';

const mongodb   = require ('@onehilltech/blueprint-mongodb')
,     String    = mongodb.Schema.Types.String
,     Number    = mongodb.Schema.Types.Number
,     ObjectId  = mongodb.Schema.Types.ObjectId
;

var schema = new mongodb.Schema ({
  company_name : {type: String,   required: true, trim: true},
  url          : {type: String,   required: true, trim: true},
  day_due      : {type: Number,   required: true, trim: true},
  account_id   : {type: ObjectId, required: true, trim: false}
});

const COLLECTION_NAME = 'utilities';
const MODEL_NAME      = 'utility';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);
