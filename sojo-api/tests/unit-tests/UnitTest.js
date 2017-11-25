var blueprint = require ('@onehilltech/blueprint')
, expect      = require ('chai').expect
;

describe ('Unit', function () {
  describe ('/units/000000000000000000000000', function () {
    context ('GET', function () {
      it ('should get a unit', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        blueprint.testing.request ()
          .get ('/units/000000000000000000000000')
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, done);
      });
    });
  });
});