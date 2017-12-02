'use strict';

const mongodb   = require ('@onehilltech/blueprint-mongodb')
,     String    = mongodb.Schema.Types.String
,     Number    = mongodb.Schema.Types.Number
,     ObjectId  = mongodb.Schema.Types.ObjectId
;

var schema = new mongodb.Schema ({
  name        : {type: String,     required: true,  trim: true},
  date        : {type: Date,       required: true,  trim: true},
  start_time  : {type: Date,       required: true,  trim: true},
  end_time    : {type: Date,       required: true,  trim: true},
  description : {type: String,     required: false, trim: true},
  account_id  : {type: ObjectId,   required: false, trim: false}
});

const COLLECTION_NAME = 'sojo_events';
const MODEL_NAME      = 'sojo_event';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);
