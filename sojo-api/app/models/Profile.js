'use strict';

const mongodb   = require ('@onehilltech/blueprint-mongodb')
,     String    = mongodb.Schema.Types.String
,     Number    = mongodb.Schema.Types.Number
,     ObjectId  = mongodb.Schema.Types.ObjectId
;

var schema = new mongodb.Schema ({
  full_name   : {type: String,     required: true,  trim: true  },
  email       : {type: String,     required: false, trim: true  },
  phone       : {type: Number,     required: true,  trim: true  },
  sojo_events : {type: [ObjectId], required: false, trim: false },
  account_id  : {type: ObjectId,   required: true,  trim: false }
});

const COLLECTION_NAME = 'profiles';
const MODEL_NAME      = 'profile';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);
