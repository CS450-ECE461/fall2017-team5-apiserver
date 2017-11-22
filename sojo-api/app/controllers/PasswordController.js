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
          Account.findOne ({ email: req.body.forgot.email }, callback);
        },
        (account, callback) => {
          if (!account) {
            return callback (new HttpError (400, 'invalid email', 'invalid email'));
          }
          // async ops over an account
          async.waterfall ([
            (callback) => {
              account.password = 'abc123';
              account.save (callback);
            }
          ], callback);
        },
        (account, n, callback) => {
          console.log (account);
          res.status (200).json (n === 1);
          return callback (null);
        }
      ], callback);
    }
  }
};
