'use strict';

const blueprint          = require ('@onehilltech/blueprint')
,     async              = require ('async')
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
,     Unit               = require ('../models/Unit')
,     Lease              = require ('../models/Lease')
,     HttpError          = blueprint.errors.HttpError
,     Profile            = require ('../models/Profile')
,     SojoEvent          = require ('../models/SojoEvent')
,     Bootstrap          = require ('../models/Bootstrap')
;

function ActivationController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (ActivationController, blueprint.BaseController);

module.exports = ActivationController;

ActivationController.prototype.__invoke = () => {
  return {
    validate: (req, callback) => {
      req.checkBody ('account_id', 'Missing account_id').notEmpty ();
      req.checkBody ('confirmation_code', 'Missing confirmation code').notEmpty ();
      return callback (req.validationErrors (true));
    },
    execute: (req, res, callback) => {
      Bootstrap.findOne ({ activation_code: req.body.confirmation_code }, (err, bootstrap) => {
        console.log (bootstrap);
        Profile.findOne ({ _id: bootstrap.profile }, (err, profile) => {
          profile.account_id = req.body.account_id;
          profile.save ();
        });
        Unit.findOne ({ _id: bootstrap.unit }, (err, unit) => {
          unit.account_id = req.body.account_id;
          unit.save ();
        });
        Lease.findOne ({ _id: bootstrap.lease }, (err, lease) => {
          lease.account_id = req.body.account_id;
          lease.save ();
        });
        bootstrap.sojo_event.map ((o) => {
          SojoEvent.findOne ({ _id: o }, (err, sojo_event) => {
            sojo_event.account_id = req.body.account_id;
            sojo_event.save ();
          });
        });
      });
      res.status (200).send (true);
    }
  }
}
