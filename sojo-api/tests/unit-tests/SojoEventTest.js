var blueprint = require ('@onehilltech/blueprint')
, expect      = require ('chai').expect
;

describe ('SojoEvent', function () {
  describe ('/events', function () {
    context ('GET', function () {
      it ('should get all events', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        blueprint.testing.request ()
          .get ('/events')
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, done);
      });
    });
  });
});