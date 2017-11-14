'use strict';

const mongodb = require ('@onehilltech/blueprint-mongodb')
;

var schema = new mongodb.Schema({
  complex_name      : {type: String, required: true, trim: true},
  landlord_email    : {type: String, required: true, trim: true},
  maintenance_email : {type: String, required: true, trim: true},
  address           : {type: String, required: true, trim: true}
});

const COLLECTION_NAME = 'complexes';
const MODEL_NAME = 'complex';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);