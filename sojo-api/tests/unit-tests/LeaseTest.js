var blueprint = require ('@onehilltech/blueprint')
, expect      = require ('chai').expect
, mongodb     = require ('@onehilltech/blueprint-mongodb')
;

describe ('Lease', function () {
  describe ('/leases/:account_id', function () {
    context ('GET', function () {
      it ('should get a lease', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        const lease0 = blueprint.app.seeds.$default.leases[0];
        blueprint.testing.request ()
          .get ('/leases/' + account0._id)
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, mongodb.lean (
            {
              _id: lease0._id,
              rent_amount: lease0.rent_amount,
              lease_type: lease0.lease_type,
              start_date: lease0.start_date,
              end_date: lease0.end_date,
              account_id: lease0.account_id,
              __v: lease0.__v
            }
          ), done);
      });
    });
  });
});
