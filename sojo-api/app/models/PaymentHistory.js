'use strict';

const mongodb   = require ('@onehilltech/blueprint-mongodb')
    ,     String    = mongodb.Schema.Types.String
    ,     Number    = mongodb.Schema.Types.Number
    ,     ObjectId  = mongodb.Schema.Types.ObjectId
;

var schema = new mongodb.Schema ({
    account_id  : {type: ObjectId, required: true, trim: false},
    amount_paid : {type: Number,   required: true, trim: true},
    date_paid   : {type: Date,     required: true, trim: true},
    model       : {type: String,   required: true, trim: true},
    company_id  : {type: ObjectId, required: true, trim: false}
});

const COLLECTION_NAME = 'payment_histories';
const MODEL_NAME      = 'payment_history';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);