var blueprint = require ('@onehilltech/blueprint')
,   expect    = require ('chai').expect
,   mongodb   = require ('@onehilltech/blueprint-mongodb')
;

describe ('PersistentSetting', function () {
  describe ('/settings/:accountId', function () {
    context ('GET', function () {
      it ('should get all settings for an account', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        const setting0 = blueprint.app.seeds.$default.persistent_settings[0];
        blueprint.testing.request ()
          .get ('/settings/' + account0._id)
          .set ('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, mongodb.lean (
            {
              _id: setting0._id,
              account_id: setting0.account_id,
              week_before_reminder: setting0.week_before_reminder,
              day_before_reminder: setting0.day_before_reminder,
              property_reminder: setting0.property_reminder,
              emergency_reminder: setting0.emergency_reminder,
              event_reminder: setting0.event_reminder,
              request_reminder: setting0.request_reminder,
              __v: setting0.__v
            }
          ), done);
      });
    });
  });
});