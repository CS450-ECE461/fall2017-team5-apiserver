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
    execute: (req, res, callback) => {
      Profile.findOne ({ account_id: req.params.Id }, (err, profile) => {
        if (!err && profile) {
          if (req.body.profile.full_name !== undefined || null) {
            profile.full_name = req.body.profile.full_name;
          }
          if (req.body.profile.phone !== undefined || null) {
            profile.phone = req.body.profile.phone;
          }
          if (req.body.profile.has_bill_pay_setup !== undefined || null) {
            profile.has_bill_pay_setup = req.body.profile.has_bill_pay_setup;
          }
          if (req.body.profile.has_signed_lease !== undefined || null) {
            profile.has_signed_lease = req.body.profile.has_signed_lease;
          }
          if (req.body.profile.account_picture_url !== undefined || null) {
            profile.account_picture_url = req.body.profile.account_picture_url;
          }
          if (req.body.profile.electric_utility !== undefined || null) {
            profile.electric_utility = req.body.profile.electric_utility;
          }
          if (req.body.profile.cable_utility !== undefined || null) {
            profile.cable_utility = req.body.profile.cable_utility;
          }
          profile.save ()
        }
        res.status (200).json ({});
      });
    }
  }
}


blueprint.controller (ProfileController, ResourceController);

module.exports = exports = ProfileController;
