var blueprint = require ('@onehilltech/blueprint')
,   expect    = require ('chai').expect
,   mongodb   = require ('@onehilltech/blueprint-mongodb')
;

describe ('Unit', function () {
  describe ('/units/:account_id', function () {
    context ('GET', function () {
      it ('should get a unit', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        const unit0 = blueprint.app.seeds.$default.units[0];
        blueprint.testing.request ()
          .get ('/units/' + account0._id)
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, mongodb.lean (
            {
              __v: unit0.__v,
              _id: unit0._id,
              account_id: unit0.account_id,
              address: unit0.address,
              building_index: unit0.building_index,
              city: unit0.city,
              landlord_email: unit0.landlord_email,
              maintenance_email: unit0.maintenance_email,
              state: unit0.state,
              unit_index: unit0.unit_index,
              zip: unit0.zip
            }
          ), done);
      });
    });
  });
});
