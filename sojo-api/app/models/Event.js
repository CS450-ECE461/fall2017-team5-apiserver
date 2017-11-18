'use strict';

const mongodb   = require ('@onehilltech/blueprint-mongodb')
,     String    = mongodb.Schema.Types.String
,     Number    = mongodb.Schema.Types.Number
,     ObjectId  = mongodb.Schema.Types.ObjectId
;

var schema = new mongodb.Schema ({
  name      : {type: String,      required: true,   trim: true},
  date      : {type: Date,        required: true,   trim: true},
  time      : {type: Date,        required: false,  trim: true},
  site      : {type: String,      required: false,  trim: true},
  attendees : {type: [ObjectId],  required: true,   trim: false}
});

// Returns true if an account._id is in the attendees array
schema.methods.isAttending = (account) => {
  return (this.attendees.filter((id) => account._id.str === id.str).length) > 0;
}

const COLLECTION_NAME = 'events';
const MODEL_NAME      = 'event';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);
