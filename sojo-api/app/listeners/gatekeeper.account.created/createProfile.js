const blueprint          = require ('@onehilltech/blueprint')
,     mongodb            = require ('@onehilltech/blueprint-mongodb')
,     Profile            = require ('../../models/Profile')
;

module.exports = (account) => {
  new Profile ({
    full_name   : account.username,
    phone       : 0,
    sojo_events : [],
    account_id: account._id
  })
  .save ((err) => {
    if (err) {
      console.log (err)
    }
    else {
      console.log ('New profile for account id: ' + account._id + ' created.')
    }
  });
}

