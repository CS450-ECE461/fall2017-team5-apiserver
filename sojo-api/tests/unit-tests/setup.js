'use strict';

const path    = require ('path')
  , blueprint = require ('@onehilltech/blueprint')
;

before ('create application and start', function (done) {
  this.timeout (100000);
  const appPath = path.resolve (__dirname, '../../app');
  blueprint.createApplicationAndStart (appPath, done);
});

beforeEach ('restart application', function (done) {
  blueprint.app.restart (done);
});
