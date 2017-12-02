var blueprint = require ('@onehilltech/blueprint')
,   expect    = require ('chai').expect
;

describe ('PersistentSetting', function () {
  describe ('/settings/:accountId', function () {
    context ('GET', function () {
      it ('should get all settings for an account', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        blueprint.testing.request ()
          .get ('/settings/' + account0._id)
          .set ('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, done);
      });
    });
  });
});