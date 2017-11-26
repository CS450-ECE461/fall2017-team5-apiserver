'use strict';

const blueprint          = require ('@onehilltech/blueprint')
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
,     ResourceController = mongodb.ResourceController
,     Payment            = require ('../models/Payment')
;

function PaymentController () {
  ResourceController.call (this, { model: Payment });
}

PaymentController.prototype.__defineGetter__ ('resourceId', () => {
  return 'Id';
});

PaymentController.prototype.get = (args) => {
  return {
    execute: (req, res, callback) => {
      Payment.find ({account_id: req.params.Id }, (err, payment) => {
        if (err) {
          res.status (400).json (err);
        }
        else if (!payment) {
          res.status (404).send ('Payment not found');
        }
        else {
          res.status (200).json (payment);
        }
      });
    }
  }
}

blueprint.controller (PaymentController, ResourceController);

module.exports = exports = PaymentController;