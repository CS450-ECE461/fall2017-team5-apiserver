var blueprint = require ('@onehilltech/blueprint')
,   expect    = require ('chai').expect
,   mongodb   = require ('@onehilltech/blueprint-mongodb')
;

describe ('Payment', function () {
  describe ('/payments/:account_id', function () {
    context ('GET', function () {
      it ('should get a payment', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        const payment0 = blueprint.app.seeds.$default.payments[0];
        blueprint.testing.request ()
          .get ('/payments/' + account0._id)
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, mongodb.lean (
            {
              _id: payment0._id,
              amount_paid: payment0.amount_paid,
              date_paid: payment0.date_paid,
              payment_type: payment0.payment_type,
              account_id: payment0.account_id,
              payment_object: payment0.payment_object,
              __v: payment0.__v
            }
          ), done);
      });
    });
  });

  describe ('/payment/:account_id/rent', () => {
    context ('GET', () => {
      it ('should get all payments for a user that are of type lease', (done) => {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        const payment3 = blueprint.app.seeds.$default.payments[0];
        blueprint.testing.request ()
          .get ('/payments/' + account0._id + '/rent')
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, mongodb.lean (
            [
              {
                _id: payment3._id,
                amount_paid: payment3.amount_paid,
                date_paid: payment3.date_paid,
                payment_type: payment3.payment_type,
                account_id: payment3.account_id,
                payment_object: payment3.payment_object,
                __v: payment3.__v
              }
            ]
          ), done);
      });
    });
  });

  describe ('/payments/:account_id/rent/:leaseId', () => {
    context  ('GET', () => {
      it ('should return a payment for a specific lease', (done) => {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        const lease0 = blueprint.app.seeds.$default.leases[0];
        const payment4 = blueprint.app.seeds.$default.payments[0];
        blueprint.testing.request ()
          .get ('/payments/' + account0._id + '/rent/' + lease0._id)
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, mongodb.lean (
            {
              _id: payment4._id,
              amount_paid: payment4.amount_paid,
              date_paid: payment4.date_paid,
              payment_type: payment4.payment_type,
              account_id: payment4.account_id,
              payment_object: payment4.payment_object,
              __v: payment4.__v
            }
          ), done);
      });
    });
  });

  describe ('/payments/:account_id/utility', () => {
    context ('GET', () => {
      it ('should get all payments for a user that are of type utility', (done) => {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        const payment1 = blueprint.app.seeds.$default.payments[1];
        blueprint.testing.request ()
          .get ('/payments/' + account0._id + '/utility')
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, mongodb.lean (
            [
              {
                _id: payment1._id,
                amount_paid: payment1.amount_paid,
                date_paid: payment1.date_paid,
                payment_type: payment1.payment_type,
                account_id: payment1.account_id,
                payment_object: payment1.payment_object,
                __v: payment1.__v
              }
            ]
          ), done);
      });
    });
  });

  describe ('/payments/:account_id/utility/:utility_id', () => {
    context ('GET', () => {
      it ('should return payment history for a specific utility', (done) => {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        const utility0 = blueprint.app.seeds.$default.utilities[0];
        const payment2 = blueprint.app.seeds.$default.payments[1];
        blueprint.testing.request ()
          .get ('/payments/' + account0._id + '/utility/' + utility0._id)
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, mongodb.lean (
            {
              _id: payment2._id,
              amount_paid: payment2.amount_paid,
              date_paid: payment2.date_paid,
              payment_type: payment2.payment_type,
              account_id: payment2.account_id,
              payment_object: payment2.payment_object,
              __v: payment2.__v
            }
          ), done);
      });
    });
  });
});
