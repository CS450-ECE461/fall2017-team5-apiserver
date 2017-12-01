'use strict';

const mongodb   = require ('@onehilltech/blueprint-mongodb')
,     String    = mongodb.Schema.Types.String
,     ObjectId  = mongodb.Schema.Types.ObjectId
;

var schema = new mongodb.Schema ({
  week_before_reminder   : {type: Boolean, required: true, trim: false},
  day_before_reminder    : {type: Boolean, required: true, trim: false},
  property_reminder      : {type: Boolean, required: true, trim: false},
  emergency_reminder     : {type: Boolean, required: true, trim: false},
  event_reminder         : {type: Boolean, required: true, trim: false},
  request_reminder       : {type: Boolean, required: true, trim: false}
}

const COLLECTION_NAME = 'persistent_settings';
const MODEL_NAME = 'persistent_setting';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);
