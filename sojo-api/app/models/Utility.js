'use strict';

const mongodb = require ('@onehilltech/blueprint-mongodb')
;

var schema = new mongodb.Schema({
    company_name: {type: String, required: true, trim: true},
    url         : {type: String, required: true, trim: true},
    due_date    : {type: Date, required: true, trim: true},
    user_id     : {type: ObjectId, required: true, trim: true}
});

const COLLECTION_NAME = 'utilities';
const MODEL_NAME = 'utility';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);