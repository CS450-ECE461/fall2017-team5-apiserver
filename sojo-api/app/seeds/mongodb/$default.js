const dab         = require ('@onehilltech/dab')
  ,   ObjectId    = require ('@onehilltech/blueprint-mongodb').Types.ObjectId
  ;

const scopes = [
  ["*"],
  [],
  []
];

const LOGIN_CLIENTS = {
  ember: 0,
};

module.exports = {
  clients: dab.times (1, function (i, opts, callback) {
    var clientName = 'ember-sojo-frontend';
    var client = {
      _id: process.env.CLIENT_OBJECT_ID,
      name: clientName,
      client_secret: process.env.CLIENT_SECRET,
      email: clientName + '@no-reply.com',
      scope: scopes[i],
      type: 'native'
    };

    return callback (null, client);
  }),

  // accounts: dab.times (1, function (i, opts, callback) {
  //   var username = 'ember-sojo-frontend';
  //   var account = {
  //     created_by: dab.ref ('clients.0'),
  //     username: username,
  //     password: username,
  //     email: username + '@no-reply.com'
  //   };
  //
  //   return callback (null, account);
  // }),

  // user_tokens: dab.map (dab.get ('accounts'), function (account, opts, callback) {
  //   const clientIndex = LOGIN_CLIENTS[account.username];
  //
  //   var model = {
  //     client: dab.get ('clients.' + clientIndex),
  //     account: account._id,
  //     refresh_token: new ObjectId (),
  //     scope: scopes[clientIndex]
  //   };
  //
  //   return callback (null, model);
  // }),

  // client_tokens: dab.map (dab.get ('clients'), function (client, opts, callback) {
  //   return callback (null, {client: client._id});
  // })
};
