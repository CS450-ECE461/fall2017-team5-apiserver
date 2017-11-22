'use strict';

const blueprint          = require ('@onehilltech/blueprint')
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
,     ResourceController = mongodb.ResourceController
,     PaymentHistory     = require ('../models/PaymentHistory')
;

function PaymentHistoryController () {
  ResourceController.call (this, { model: PaymentHistory });
}

PaymentHistoryController.prototype.__defineGetter__ ('resourceId', () => {
  return 'Id';
});

blueprint.controller (PaymentHistoryController, ResourceController);

module.exports = exports = PaymentHistoryController;