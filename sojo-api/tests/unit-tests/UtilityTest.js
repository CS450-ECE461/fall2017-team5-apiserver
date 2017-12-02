var blueprint = require ('@onehilltech/blueprint')
, expect      = require ('chai').expect
;

describe ('Utility', function () {
  describe ('/utilities/:utilityId', function () {
    context ('GET', function () {
      it ('should get a utility', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const utility0 = blueprint.app.seeds.$default.utilities[0];
        blueprint.testing.request ()
          .get ('/utilities/' + utility0._id)
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, done);
      });
    });
  });
});
