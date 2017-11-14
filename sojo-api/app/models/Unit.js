'use strict';

const mongodb = require ('@onehilltech/blueprint-mongodb')
;

var schema = new mongodb.Schema ({
  apartment_complex_id : {type: ObjectId, required: true, trim: true},
  lease_id             : {type: ObjectId, required: true, trim: true}
});

const COLLECTION_NAME = 'units';
const MODEL_NAME = 'unit';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);