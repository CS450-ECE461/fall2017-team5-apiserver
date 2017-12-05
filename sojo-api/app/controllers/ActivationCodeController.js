const blueprint          = require ('@onehilltech/blueprint')
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
,     Bootstrap          = require ('../models/Bootstrap')
;

function ActivationCodeController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (ActivationCodeController, blueprint.BaseController);

module.exports = ActivationCodeController;

ActivationCodeController.prototype.__invoke = () => {
  return {
    validate: (req, callback) => {
      req.checkBody ('confirmation_code', 'Missing confirmation code').notEmpty ();
      return callback (req.validationErrors (true));
    },
    execute: (req, res, callback) => {
      Bootstrap.findOne ({ activation_code: req.body.confirmation_code }, (err, bootstrap) => {
        if (err) {
          res.status (400).json (err);
        } else if (!bootstrap) {
          res.status (200).json ({ valid: false });
        } else {
          res.status (200).json ({ valid: true });
        }
      });
    }
  }
}
