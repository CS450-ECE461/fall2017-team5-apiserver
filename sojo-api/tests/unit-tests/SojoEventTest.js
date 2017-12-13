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
            []
          ), done);
      });
    });
  });
  describe ('/events/:eventId', function () {
    context ('GET', function () {
      it ('should get an event', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const faccount = (x) => { return blueprint.app.seeds.$default.accounts[x]; };
        const fevent = (x) => { return blueprint.app.seeds.$default.sojo_events[x]; };
        blueprint.testing.request ()
          .get ('/events/' + faccount(0)._id)
          .set ('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, mongodb.lean (
            [{
              _id: fevent (0)._id,
              name: fevent (0).name,
              date: fevent (0).date,
              start_time: fevent (0).start_time,
              end_time: fevent (0).end_time,
              description: fevent (0).description,
              type: fevent (0).type,
              account_id: fevent (0).account_id,
              __v: fevent (0).__v
            }]
          ), done);
      });
    });
  });
  describe ('/events/account/:accountId', function () {
    context ('GET', function () {
      it ('should get all private events for an account', (done) => {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const faccount = (x) => { return blueprint.app.seeds.$default.accounts[x]; };
        const fevent = (x) => { return blueprint.app.seeds.$default.sojo_events[x]; };
        blueprint.testing.request ()
          .get ('/events/account/' + faccount (0)._id)
          .set ('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, mongodb.lean (
            [{
              _id: fevent (0)._id,
              name: fevent (0).name,
              date: fevent (0).date,
              start_time: fevent (0).start_time,
              end_time: fevent (0).end_time,
              description: fevent (0).description,
              type: fevent (0).type,
              account_id: fevent (0).account_id,
              __v: fevent (0).__v
            }]
          ), done);
      });
    });
  });
});
