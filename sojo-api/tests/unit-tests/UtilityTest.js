var blueprint = require ('@onehilltech/blueprint')
,   expect    = require ('chai').expect
,   mongodb   = require ('@onehilltech/blueprint-mongodb')
;

describe ('Utility', function () {
  describe ('/utilities/:utilityId', function () {
    context ('GET', function () {
      it ('should get a utility', function (done) {
        const accessToken = blueprint.app.seeds.$default.user_tokens[0].serializeSync ();
        const utility0 = blueprint.app.seeds.$default.utilities[0];
        blueprint.testing.request ()
          .get ('/utilities/' + utility0._id)
          .set('Authorization', 'Bearer ' + accessToken.access_token)
          .expect (200, mongodb.lean (
            {
              _id: utility0._id,
              company_name: utility0.company_name,
              url: utility0.url,
              due_date: utility0.due_date,
              account_id: utility0.account_id,
              __v: utility0.__v
            }
          ), done);
      });
    });
  });
});
