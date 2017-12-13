'use strict';

const mongodb   = require ('@onehilltech/blueprint-mongodb')
,     String    = mongodb.Schema.Types.String
,     Number    = mongodb.Schema.Types.Number
,     ObjectId  = mongodb.Schema.Types.ObjectId
;

var schema = new mongodb.Schema ({
  company_name : {type: String,   required: true,  trim: true},
  url          : {type: String,   required: true,  trim: true},
  due_date     : {type: Date,     required: true,  trim: true},
  account_id   : {type: ObjectId, required: false, trim: false}
});

const COLLECTION_NAME = 'utilities';
const MODEL_NAME      = 'utility';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);
