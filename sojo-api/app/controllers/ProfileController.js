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

ProfileController.prototype.Me = (args) => {
  return {
    validate: (req, callback) => {
      return callback (req.validationErrors (true));
    },
    sanitize: (req, callback) => {
      return callback (null);
    },
    execute: (req, res, callback) => {
      res.json ({ _id: 'ABCDEFH' });
      return callback (null);
    }
  }
}

ProfileController.prototype.getEvents = (args) => {
  return {
    execute: (req, res, callback) => {
      req.status (200).json ({});
      return callback (null);
    }
  }
}

ProfileController.prototype.getEventById = (args) => {
  return {
    execute: (req, res, callback) => {
      req.status (200).json ({});
      return callback (null);
    }
  }
}

ProfileController.prototype.getUtilities = (args) => {
  return {
    execute: (req, res, callback) => {
      req.status (200).json ({});
      return callback (null);
    }
  }
}

ProfileController.prototype.getUtilityById = (args) => {
  return {
    execute: (req, res, callback) => {
      req.status (200).json ({});
      return callback (null);
    }
  }
}

blueprint.controller (ProfileController, ResourceController);

module.exports = exports = ProfileController;
