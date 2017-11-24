var blueprint = require ('@onehilltech/blueprint')
, expect      = require ('chai').expect
;

describe ('Profile', function () {
  describe ('/profiles/000000000000000000000000', function () {
    context ('GET', function () {
      it ('should get a profile', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        blueprint.testing.request ()
          .get ('/profiles/000000000000000000000000')
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, done);
      });
    });
  });
});
