'use strict';

const blueprint          = require ('@onehilltech/blueprint')
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
,     ResourceController = mongodb.ResourceController
,     PersistentSettings = require ('../models/PersistentSettings')
;

function PersistentSettingsController () {
  ResourceController.call (this, { model: PersistentSettings });
}

PersistentSettings.prototype.get = (args) => {
  return {
    execute: (req, res, callback) => {
      PersistentSettings.find ({ account_id: req.params.Id }, (err, settings) => {
        if(err) {
          res.status (400).json (err);
        }
        else if (!settings) {
          res.status (404).send ('settings not found');
        }
        else {
          res.status (200).json (settings);
        }
      });
    }
  }
}

blueprint.controller (PersistentSettingsController, ResourceController);

module.exports = exports = PersistentSettingsController;
