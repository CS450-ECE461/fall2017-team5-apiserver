var blueprint = require ('@onehilltech/blueprint')
, expect    = require ('chai').expect
;

describe ('Utility', function () {
describe ('/utilities', function () {
  context ('GET', function () {
    it ('get from utilites', function (done) {
      blueprint.testing.request ()
        .get ('/utilities')
        .expect (200, done);
    });
  });
});
});