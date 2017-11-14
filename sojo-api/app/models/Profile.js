'use strict';

const mongodb = require ('@onehilltech/blueprint-mongodb')
;

var schema = new mongodb.Schema({
  full_name: {type: String, required: true, trim: true},
  phone    : {type: Number, required: true, trim: true}
});

const COLLECTION_NAME = 'profiles';
const MODEL_NAME = 'profile';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);
