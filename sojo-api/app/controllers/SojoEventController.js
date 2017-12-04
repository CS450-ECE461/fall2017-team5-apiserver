'use strict';

const blueprint          = require ('@onehilltech/blueprint')
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
,     ResourceController = mongodb.ResourceController
,     SojoEvent          = require ('../models/SojoEvent')
;

function SojoEventController () {
  ResourceController.call (this, { model: SojoEvent });
}

SojoEventController.prototype.__defineGetter__ ('resourceId', () => {
  return 'Id';
});

SojoEventController.prototype.__defineGetter__ ('accountId', () => {
  return 'AccountId';
});

SojoEventController.prototype.getAll = (args) => {
  return {
    execute: (req, res, callback) => {
      SojoEvent.find ({ account_id: { $exists: false } }, (err, sojo_event) => {
        if (err) {
          res.status (400).json (err);
        }
        else if (!sojo_event) {
          res.status (404).send ('SojoEvent not found');
        }
        else {
          res.status (200).json (sojo_event);
        }
      });
    }
  }
}

SojoEventController.prototype.get = (args) => {
  return {
    execute: (req, res, callback) => {
      SojoEvent.findOne ({ _id: req.params.Id }, (err, sojo_event) => {
        if (err) {
          res.status (400).json (err);
        }
        else if (!sojo_event) {
          res.status (404).send ('SojoEvent not found');
        }
        else {
          res.status (200).json (sojo_event);
        }
      });
    }
  }
}

SojoEventController.prototype.getAccountEvents = (args) => {
  return {
    execute: (req, res, callback) => {
      SojoEvent.find ({ account_id: req.params.accountId }, (err, sojo_event) => {
        if (err) {
          res.status (400).json (err);
        }
        else if (!sojo_event) {
          res.status (404).send ('SojoEvent not found');
        }
        else {
          res.status (200).json (sojo_event);
        }
      });
    }
  }
}

blueprint.controller (SojoEventController, ResourceController);

module.exports = exports = SojoEventController;


