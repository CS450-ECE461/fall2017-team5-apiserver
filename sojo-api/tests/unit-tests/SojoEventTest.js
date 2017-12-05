var blueprint = require ('@onehilltech/blueprint')
, expect      = require ('chai').expect
, mongodb     = require ('@onehilltech/blueprint-mongodb')
, ObjectId    = mongodb.Types.ObjectId
;

describe ('SojoEvent', function () {
  describe ('/events/', function () {
    context ('GET', function () {
      it ('should get all events that are public', function (done) {
        const event1 = blueprint.app.seeds.$default.sojo_events[1];
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        blueprint.testing.request ()
          .get ('/events')
          .set ('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, mongodb.lean (
            [
              {
                _id: event1._id,
                name: event1.name,
                date: event1.date,
                start_time: event1.start_time,
                end_time: event1.end_time,
                description: event1.description,
                type: event1.type,
                __v: event1.__v
              }
            ]
          ), done);
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
          .expect (200, mongodb.lean (
              {
                _id: event0._id,
                name: event0.name,
                date: event0.date,
                start_time: event0.start_time,
                end_time: event0.end_time,
                description: event0.description,
                type: event0.type,
                account_id: event0.account_id,
                __v: event0.__v
              }
          ), done);
      });
    });
  });
  describe ('/events/account/:accountId', function () {
    context ('GET', function () {
      it ('should get all private events for an account', (done) => {
        const event0 = blueprint.app.seeds.$default.sojo_events[0];
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const account0 = blueprint.app.seeds.$default.accounts[0];
        blueprint.testing.request ()
          .get ('/events/account/' + account0._id)
          .set ('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, mongodb.lean (
            [
              {
                _id: event0._id,
                name: event0.name,
                date: event0.date,
                start_time: event0.start_time,
                end_time: event0.end_time,
                description: event0.description,
                type: event0.type,
                account_id: event0.account_id,
                __v: event0.__v
              }
            ]
          ), done);
      });
    });
  });
});
