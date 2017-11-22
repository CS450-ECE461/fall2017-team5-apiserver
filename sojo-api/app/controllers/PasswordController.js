'use strict';

const blueprint          = require ('@onehilltech/blueprint')
,     async              = require ('async')
,     Profile            = require ('../models/Profile')
,     Account            = require ('@onehilltech/blueprint-gatekeeper/app/models/Account')
,     HttpError          = blueprint.errors.HttpError
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
;

function PasswordController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (PasswordController, blueprint.BaseController);

module.exports = PasswordController;

PasswordController.prototype.forgotPassword = () => {
  return {
    validate: (req, callback) => {
      req.checkBody ('forgot.email', 'Missing email parameter').notEmpty ();
      return callback (req.validationErrors (true));
    },

    sanitize: (req, callback) => {
      req.sanitizeBody ('forgot.email').normalizeEmail ();
      return callback (null);
    },
    
    execute: (req, res, callback) => {
      async.waterfall ([
        (callback) => {
          Profile.findOne ({ email: req.body.forgot.email }, callback);
        },
        (profile, callback) => {
          if (!profile) {
            return callback (new HttpError (400, 'invalid email', 'invalid email'));
          }
          async.waterfall ([
            (callback) => {
              Account.findById (profile.account_id, callback);
            },
            (account, callback) => {
              if (!account) {
                return callback (new HttpError (400, 'invalid email', 'invalid email'));
              }
              async.waterfall ([
                (callback) => {
                  account.password = 'abc123';
                  account.save (callback);
                }
              ], callback);
            },

            (account, n, callback) => {
              res.status (200).json (n === 1);
              return callback (null);
            }
          ], callback);
        },
      ], callback);
    }
  }
};
