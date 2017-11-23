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
      _id: new ObjectId ('000000000000000000000000'),
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
  }),

  profiles: dab.map (dab.get ('accounts'), (account, opts, callback) => {
    return callback (null, {
      full_name: 'Swag Monkey',
      phone: 777555333,
      sojo_events: [ObjectId (11111)],
      account_id: account._id
    });
  }),

  sojo_events: dab.map (dab.get ('accounts'), (account, opts, callback) => {
    return callback (null, {
        name: 'Fish Sale',
        date: new Date(),
        time: new Date(),
        site: 'Cookout Garden',
        attendees: [account._id]
    });
  }),

  leases: dab.map (dab.get ('accounts'), (account, opts, callback) => {
    return callback (null, {
      rent_amount: 500,
      start_date: new Date(),
      end_date: new Date(),
      account_id: account._id
    });
  }),

  units: dab.map (dab.get ('accounts'), (account, opts, callback) => {
    return callback (null, {
      unit_index: 'b',
      building_index: '221',
      maintenance_email: 'main@no-reply.com',
      landlord_email: 'landlord@no-reply.com',
      account_id: account._id
    });
  }),

  utilities: dab.map (dab.get ('accounts'), (account, opts, callback) => {
    let company_name = 'att';
    return callback (null, {
      company_name,
      url: company_name + '.com',
      due_date: new Date(),
      account_id: account._id
    });
  })
};
