var blueprint = require ('@onehilltech/blueprint')
, expect      = require ('chai').expect
;

describe ('Lease', function () {
  describe ('/leases/000000000000000000000000', function () {
    context ('GET', function () {
      it ('should get a lease', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        blueprint.testing.request ()
          .get ('/leases/000000000000000000000000')
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, done);
      });
    });
  });
});