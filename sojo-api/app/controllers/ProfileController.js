var blueprint          = require ('@onehilltech/blueprint')
  , mongodb            = require ('@onehilltech/blueprint-mongodb')
  , ResourceController = mongodb.ResourceController
  , Profile            = require ('../models/Profile')
  ;

function ProfileController () {
  ResourceController.call (this, { model: Profile });
}

ProfileController.prototype.__defineGetter__ ('resourceId', () => {
  return 'Id';
});

ProfileController.prototype.get = (args) => {
  return {
    execute: (req, res, callback) => {
      Profile.findOne ({ account_id: req.params.Id }, (err, profile) => {
        if (err) {
          res.status (400).json (err);
        }
        else if (!profile) {
          res.status (404).send ('Profile not found');
        }
        else {
          res.status (200).json (profile);
        }
      });
    }
  }
}

blueprint.controller (ProfileController, ResourceController);

module.exports = exports = ProfileController;
