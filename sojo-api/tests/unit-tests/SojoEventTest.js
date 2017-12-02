var blueprint = require ('@onehilltech/blueprint')
, expect      = require ('chai').expect
, ObjectId    = require ('@onehilltech/blueprint-mongodb').Types.ObjectId
;

describe ('SojoEvent', function () {
  describe ('/events/', function () {
    context ('GET', function () {
      it ('should get all events that are public', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        blueprint.testing.request ()
          .get ('/events')
          .set ('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200)
          .end (function (err, res) {
            if (err) return done (err);
            expect (res.body[0]);
            expect (!(res.body[0].account_id));

            return done (null);
          }, done);
      });
    });
  });
  describe ('/events/:eventId', function () {
    context ('GET', function () {
      it ('should get an event', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const event0 = blueprint.app.seeds.$default.sojo_events[0];
        blueprint.testing.request ()
          .get ('/events/' + event0._id)
          .set ('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, done);
      });
    });
  });
  describe ('/events/account/:accountId', function () {
    context ('GET', function () {
      it ('should get all private events for an account', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        blueprint.testing.request ()
          .get ('/events/account/' + account0._id)
          .set ('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, done);
      });
    });
  });
});
