'use strict';

const mongodb   = require ('@onehilltech/blueprint-mongodb')
,     String    = mongodb.Schema.Types.String
,     Number    = mongodb.Schema.Types.Number
,     ObjectId  = mongodb.Schema.Types.ObjectId
;

var schema = new mongodb.Schema ({
  profile         : {type: ObjectId,   required: true,  trim: false},
  sojo_event      : {type: [ObjectId], required: false, trim: false},
  unit            : {type: ObjectId,   required: true,  trim: false},
  lease           : {type: ObjectId,   required: true,  trim: false},
  activation_code : {type: String,     required: true,  trim: false},
  is_activated    : {type: Boolean,    required: true,  trim: false}
});

const COLLECTION_NAME = 'bootstraps';
const MODEL_NAME      = 'bootstrap';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);
