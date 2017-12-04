'use strict';

const blueprint          = require ('@onehilltech/blueprint')
,     async              = require ('async')
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
,     HttpError          = blueprint.errors.HttpError
,     Bootstrap          = require ('../models/Bootstrap')
,     Profile            = require ('../models/Profile')
,     SojoEvent          = require ('../models/SojoEvent')
,     Unit               = require ('../models/Unit')
,     Lease              = require ('../models/Lease')
;

function ActivationController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (ActivationController, blueprint.BaseController);

module.exports = exports = ActivationController;

ActivationController.prototype.__invoke = () => {
  return {
    validate: (req, callback) => {
      req.sanitizeBody ('account_id', 'Missing account_id').notEmpty ();
      req.sanitizeBody ('activation_code', 'Missing activation code').notEmpty ();
      return callback (req.validationErrors (true));
    },
    execute: (req, res, callback) => {
      async.waterfall ([
        (callback) => {
          Bootstrap.findOne ({ activation_code: req.body.activation_code }, callback);
        },
        (bootstrap, callback) => {
          if (!bootstrap) {
            return callback (new HttpError (400, 'invalid activation code', 'invalid activation code'));
          }

          async.waterfall ([
            (callback) => {
              Profile.findOne ({ _id: user_data.profile._id }, callback);
            },
            (profile, callback) => {
              if (!profile) {
                return callback (new HttpError (400, 'invalid request', 'invalid request'));
              }

              profile.account_id = req.body.account_id;
              profile.save (callback);

              async.waterfall ([
                (callback) => {
                  SojoEvent.find ({ _id: user_data.sojo_event._id }, callback);
                },
                (sojo_events, callback) => {
                  if (sojo_events.length === 0) {
                    return callback (new HttpError (400, 'invalid request', 'invalid request'));
                  }

                  sojo_events.map ((o) => {
                    o[account_id] = req.body.accound_id;
                  });

                  // HACK
                  sojo_events[0].save (callback);

                  async.waterfall ([
                    (callback) => {
                      Unit.findOne ({ _id: user_data.unit._id }, callback);
                    },
                    (unit, callback) => {
                      if (!unit) {
                        return callback (new HttpError (400, 'invalid request', 'invalid request'));
                      }

                      unit.account_id = req.body.account_id;
                      unit.save (callback);
                      
                      async.waterfall ([
                        (callback) => {
                          Lease.findOne ({ _id: user_data.lease._id }, callback);
                        },
                        (lease, callback) => {
                          if (!lease) {
                            return callback (new HttpError (400, 'invalid request', 'invalid request'));
                          }

                          lease.account_id = req.body.account_id;
                          lease.save (callback);
                        },
                        (lease, n, callback) => {
                          // ensure model was saved
                        },
                      ], callback);
                    },
                    (unit, n, callback) => {
                      // ensure model was saved
                    },
                  ], callback);
                },
                (sojo_events, n, callback) => {
                  // ensure model was saved
                },
              ], callback);
            },
            (profile, n, callback) => {
              // ensure model was saved
            },
          ], callback);
        },
      ], callback);
    }
  }
}
