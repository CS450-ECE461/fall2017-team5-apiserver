const dab         = require ('@onehilltech/dab')
  ,   ObjectId    = require ('@onehilltech/blueprint-mongodb').Types.ObjectId
  ;

const scopes = [
  ["*"],
  [],
  []
];

const LOGIN_CLIENTS = {
  'ember-sojo-frontend': 0,
};

module.exports = { 
  clients: dab.times (1, (i, opts, callback) => {
    let name = 'ember-sojo-frontend';
    let client_secret = name;
    let recaptcha_secret = name;

    return callback (null, {
      name,
      client_secret,
      email: name + '@no-reply.com',
      type: 'native',
      recaptcha_secret
    });
  }),

  accounts: dab.times (1, (i, opts, callback) => {
    var username = 'ember-sojo-frontend';
   
    return callback (null, {
      created_by: dab.ref ('clients.0'),
      username,
      password: username,
      email: username + '@no-reply.com'
    });
  }),

  user_tokens: dab.map (dab.get ('accounts'), (account, opts, callback) => {
    const clientIndex = LOGIN_CLIENTS[account.username];
  
    return callback (null, {
      client: dab.get ('clients.0'),
      account: account._id,
      refresh_token: new ObjectId (),
      scope: scopes[clientIndex]
    });
  }),

  client_tokens: dab.map (dab.get ('clients'), (client, opts, callback) => {
    return callback (null, {client: client._id});
  })
};
