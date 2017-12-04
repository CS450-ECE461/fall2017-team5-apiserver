'use strict';

const blueprint          = require ('@onehilltech/blueprint')
,     BaseController     = blueprint.BaseController
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
,     UserData           = require ('../models/UserData')
;

function ActivationController () => {
  BaseController.call (this);
}

ActivationController.prototype.__invoke = () => {
  return {
    validate: (req, callback) => {
    },
    execute: (req, res, callback) => {
    }
  }
}
