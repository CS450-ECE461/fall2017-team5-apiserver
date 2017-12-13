'use strict';

const blueprint          = require ('@onehilltech/blueprint')
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
,     ResourceController = mongodb.ResourceController
,     PersistentSetting  = require ('../models/PersistentSetting')
;

function PersistentSettingController () {
  ResourceController.call (this, { model: PersistentSetting });
}

PersistentSettingController.prototype.__defineGetter__ ('resourceId', () => {
  return 'Id';
});

PersistentSettingController.prototype.get = (args) => {
  return {
    execute: (req, res, callback) => {
      PersistentSetting.findOne ({ account_id: req.params.Id }, (err, settings) => {
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

blueprint.controller (PersistentSettingController, ResourceController);

module.exports = exports = PersistentSettingController;
