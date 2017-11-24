var blueprint = require ('@onehilltech/blueprint')
, expect      = require ('chai').expect
;

describe ('PaymentHistory', function () {
  describe ('/payment_history', function () {
    context ('GET', function () {
      it ('should get a payment', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        blueprint.testing.request ()
          .get ('/payment_history')
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, done);
      });
    });
  });
});