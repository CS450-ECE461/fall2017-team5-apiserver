var blueprint          = require ('@onehilltech/blueprint')
  , mongodb            = require ('@onehilltech/blueprint-mongodb')
  , ResourceController = mongodb.ResourceController
  , Profile            = require ('../models/Profile')
;

function ProfileController () {
  ResourceController.call (this, { model: Profile });
}

ProfileController.prototype.__defineGetter__ ('resourceId', function () {
  return 'profileId';
});

blueprint.controller (ProfileController, ResourceController);

module.exports = exports = ProfileController;
