'use strict';

const mongodb   = require ('@onehilltech/blueprint-mongodb')
,     String    = mongodb.Schema.Types.String
,     Number    = mongodb.Schema.Types.Number
,     ObjectId  = mongodb.Schema.Types.ObjectId
;

var schema = new mongodb.Schema ({
  profile       : {type: ObjectId, required: true, trim: false},
  sojo_events   : {type: ObjectId, required: true, trim: false},
  unit          : {type: ObjectId, required: true, trim: false},
  lease         : {type: ObjectId, required: true, trim: false},
  is_activated  : {type: Boolean,  required: true, trim: false},
});

const COLLECTION_NAME = 'users_data';
const MODEL_NAME      = 'user_data';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);
