'use strict';

const blueprint          = require ('@onehilltech/blueprint')
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
,     ResourceController = mongodb.ResourceController
,     Utility            = require ('../models/Utility')
;

function UtilityController () {
  ResourceController.call (this, { model: Utility });
}

UtilityController.prototype.__defineGetter__ ('resourceId', () => {
  return 'Id';
});

UtilityController.prototype.get = (args) => {
  return {
    execute: (req, res, callback) => {
      Utility.findOne ({ _id: req.params.Id }, (err, utility) => {
        if (err) {
          res.status (400).json (err);
        }
        else if (!utility) {
          res.status (404).send ('Utility not found');
        }
        else {
          res.status (200).json (utility);
        }
      });
    }
  }
}

blueprint.controller (UtilityController, ResourceController);

module.exports = exports = UtilityController;
