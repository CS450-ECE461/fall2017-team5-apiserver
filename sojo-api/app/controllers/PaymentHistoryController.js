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

PaymentHistoryController.prototype.getAll = (args) => {
  return {
    execute: (req, res, callback) => {
      PaymentHistory.find ({account_id: req.params.Id }, (err, payment_history) => {
        if (err) {
          res.status (404).json (err);
        }
        else if (!payment_history) {
          res.status (404).send ('PaymentHistory not found');
        }
        else {
          res.status (200).json (payment_history);
        }
      });
    }
  }
}

blueprint.controller (PaymentHistoryController, ResourceController);

module.exports = exports = PaymentHistoryController;