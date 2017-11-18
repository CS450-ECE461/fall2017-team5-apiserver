'use strict';

const blueprint          = require ('@onehilltech/blueprint')
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
,     ResourceController = mongodb.ResourceController
,     Lease              = require ('../models/Lease')
;

function LeaseController () {
  ResourceController.call (this, { model: Lease });
}

LeaseController.prototype.get = (args) => {
  return {
    execute: (req, res, callback) => {
      Lease.findOne ({ account_id: req.params.Id }, (err, lease) => {
        if (err) {
          res.status (400).json (err);
        }
        else if (!lease) {
          res.status (404).send ('Lease not found');
        }
        else {
          res.status (200).json (lease);
        }
      });
    }
  }
}

blueprint.controller (LeaseController, ResourceController);

module.exports = exports = LeaseController;
