'use strict';

const blueprint          = require ('@onehilltech/blueprint')
,     async              = require ('async')
,     Profile            = require ('../models/Profile')
,     Account            = require ('@onehilltech/blueprint-gatekeeper/app/models/Account')
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
;

function PasswordController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (PasswordController, blueprint.BaseController);

module.exports = PasswordController;

PasswordController.prototype.forgotPassword = () => {
  return {
    execute: (req, res, callback) => {
      async.waterfall ([
        (callback) => {
          Profile.findOne ({ email: req.body.email }, callback);
        },

        (profile, callback) => {
          async.waterfall ([
            (callback) => {
              Account.findById (profile.account_id, callback);
            },

            (account, callback) => {
              async.waterfall ([
                (callback) => {
                  account.password = 'abc123';
                  account.save (callback);
                }
              ], callback);
            }
          ], callback);
        },

        (account, n, callback) => {
          res.status (200).json (n === 1);
          return callback (null);
        }
      ], callback);
    }
  }
};
