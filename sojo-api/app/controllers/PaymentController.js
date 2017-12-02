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

PaymentController.prototype.__defineGetter__ ('utilityId', () => {
  return 'UtilityId';
});

PaymentController.prototype.__defineGetter__ ('leaseId', () => {
  return 'LeaseId';
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

PaymentController.prototype.getAllRentPayments = () => {
  return {
    execute: (req, res, callback) => {
      Payment.find ({
        account_id: req.params.Id,
        payment_type: 'lease'
      }, (err, payment) => {
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

PaymentController.prototype.getOneRentPayment = () => {
  return {
    execute: (req, res, callback) => {
      Payment.findOne ({
        account_id: req.params.Id,
        payment_type: 'lease',
        payment_object: req.params.LeaseId
      }, (err, payment) => {
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

PaymentController.prototype.getAllUtilityPayments = () => {
  return {
    execute: (req, res, callback) => {
      Payment.find ({
        account_id: req.params.Id,
        payment_type: 'utility'
      }, (err, payment) => {
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

PaymentController.prototype.getOneUtilityPayment = () => {
  return {
    execute: (req, res, callback) => {
      Payment.find ({
        account_id: req.params.Id,
        payment_type: 'utility',
        payment_object: req.params.UtilityId
      }, (err, payment) => {
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
