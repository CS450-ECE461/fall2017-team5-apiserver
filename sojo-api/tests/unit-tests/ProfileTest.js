var blueprint = require ('@onehilltech/blueprint')
,   expect    = require ('chai').expect
,   mongodb   = require ('@onehilltech/blueprint-mongodb')
;

describe ('Profile', function () {
  describe ('/profiles/:accountId', function () {
    context ('GET', function () {
      it ('should get a profile', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        const profile0 = blueprint.app.seeds.$default.profiles[0];
        blueprint.testing.request ()
          .get ('/profiles/' + account0._id)
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, mongodb.lean (
            {
              __v: profile0.__v,
              _id: profile0._id,
              account_id: profile0.account_id,
              account_picture_url: profile0.account_picture_url,
              cable_utility: profile0.cable_utility,
              electric_utility: profile0.electric_utility,
              full_name: profile0.full_name,
              has_bill_pay_setup: profile0.has_bill_pay_setup,
              has_signed_lease: profile0.has_signed_lease,
              phone: profile0.phone
          }
          ), done);
      });
    });
  });
});
