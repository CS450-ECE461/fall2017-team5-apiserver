'use strict';

const blueprint          = require ('@onehilltech/blueprint')
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
,     ResourceController = mongodb.ResourceController
,     Profile            = require ('../models/Profile')
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

ProfileController.prototype.update = (args) => {
  return {
    validate: (req, callback) => {
      req.checkBody ('profile.full_name', 'Missing full_name').notEmpty ();
      req.checkBody ('profile.phone', 'Missing phone').notEmpty ();
      req.checkBody ('profile.has_bill_pay_setup', 'Missing has_bill_pay_setup').notEmpty ();
      req.checkBody ('profile.has_signed_lease', 'Missing has_signed_lease').notEmpty ();
      req.checkBody ('profile.electric_utility', 'Missing electric_utility').notEmpty ();
      req.checkBody ('profile.cable_utility', 'Missing cable_utility').notEmpty ();
      return callback (req.validationErrors (true));
    },

    execute: (req, res, callback) => {
      Profile.findOne ({ account_id: req.params.Id }, (err, profile) => {
        profile.full_name = req.body.profile.full_name;
        profile.phone = req.body.profile.phone;
        profile.has_bill_pay_setup = req.body.profile.phone;
        profile.has_signed_lease = req.body.profile.has_signed_lease;
        if (req.body.profile.account_picture_url !== undefined) {
          profile.account_picture_url = req.body.profile.account_picture_url;
        }
        profile.electric_utility = req.body.profile.electric_utility;
        profile.cable_utility = req.body.profile.cable_utility;
        profile.save ()
          res.status (200).json ({});
        });
      });
    }
  }
}

blueprint.controller (ProfileController, ResourceController);

module.exports = exports = ProfileController;
