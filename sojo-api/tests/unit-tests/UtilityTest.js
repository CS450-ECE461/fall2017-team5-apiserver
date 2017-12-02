var blueprint = require ('@onehilltech/blueprint')
, expect      = require ('chai').expect
;

describe ('Utility', function () {
  describe ('/utilities/000000000000000000000000', function () {
    context ('GET', function () {
      it ('should get a utility', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        blueprint.testing.request ()
          .get ('/utilities/000000000000000000000000')
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, done);
      });
    });
  });
});
