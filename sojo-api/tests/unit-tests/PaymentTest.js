var blueprint = require ('@onehilltech/blueprint')
, expect      = require ('chai').expect
;

describe ('Payment', function () {
  describe ('/payments/:account_id', function () {
    context ('GET', function () {
      it ('should get a payment', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        blueprint.testing.request ()
          .get ('/payments/' + account0._id)
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, done);
      });
    });
  });

  describe ('/payment/:account_id/rent', () => {
    context ('GET', () => {
      it ('should get all payments for a user that are of type lease', (done) => {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        blueprint.testing.request ()
          .get ('/payments/' + account0._id + '/rent')
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, done);
      });
    });
  });

  describe ('/payments/:account_id/rent/:leaseId', () => {
    context  ('GET', () => {
      it ('should return payment history for a specific lease', (done) => {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        const lease0 = blueprint.app.seeds.$default.leases[0];
        blueprint.testing.request ()
          .get ('/payments/' + account0._id + '/rent/' + lease0._id)
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, done);
      });
    });
  });

  describe ('/payments/:account_id/utility', () => {
    context ('GET', () => {
      it ('should get all payments for a user that are of type utility', (done) => {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        blueprint.testing.request ()
          .get ('/payments/' + account0._id + '/utility')
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, done);
      });
    });
  });

  describe ('/payments/:account_id/utility/:utility_id', () => {
    context ('GET', () => {
      it ('should return payment history for a specific utility', (done) => {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        const utility0 = blueprint.app.seeds.$default.utilities[0];
        blueprint.testing.request ()
          .get ('/payments/' + account0._id + '/utility/' + utility0._id)
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, done);
      });
    });
  });
});
