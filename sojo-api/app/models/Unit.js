'use strict';

const mongodb   = require ('@onehilltech/blueprint-mongodb')
,     String    = mongodb.Schema.Types.String
,     Number    = mongodb.Schema.Types.Number
,     ObjectId  = mongodb.Schema.Types.ObjectId
;

var schema = new mongodb.Schema ({
    unit_index        : {type: String,   required: true, trim: true},
    building_index    : {type: String,   required: true, trim: true},
    maintenance_email : {type: String,   required: true, trim: true},
    landlord_email    : {type: String,   required: true, trim: true},
    account_id        : {type: ObjectId, required: true, trim: true}
});

const COLLECTION_NAME = 'units';
const MODEL_NAME = 'unit';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);