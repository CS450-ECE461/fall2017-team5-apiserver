'use strict';

const blueprint          = require ('@onehilltech/blueprint')
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
,     ResourceController = mongodb.ResourceController
,     Unit               = require ('../models/Unit')
;

function UnitController () {
  ResourceController.call (this, { model: Unit });
}

UnitController.prototype.__defineGetter__ ('resourceId', () => {
  return 'Id';
});

UnitController.prototype.get = (args) => {
  return {
    execute: (req, res, callback) => {
      Unit.findOne ({ account_id: req.params.Id }, (err, unit) => {
        if (err) {
          res.status (400).json (err);
        }
        else if (!unit) {
          res.status (404).send ('Unit not found');
        }
        else {
          res.status (200).json (unit);
        }
      });
    }
  }
}

blueprint.controller (UnitController, ResourceController);

module.exports = exports = UnitController;
