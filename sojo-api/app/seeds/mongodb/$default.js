const dab         = require ('@onehilltech/dab')
  ,   gatekeeper  = require ('@onehilltech/blueprint-gatekeeper')
  ,   ObjectId    = require ('@onehilltech/blueprint-mongodb').Types.ObjectId
  ;

const scopes = [
  ['*'],
  [],
  []
];

const LOGIN_CLIENTS = {
  'ember-sojo-frontend': 0,
};

// User Data Boostrap
// ------------------
const FULL_NAMES = [
  "Sam Reese",
  "Hobert Zoeller",
  "Ivana Mcardell",
  "Erma Safley",
  "Octavio Sas",
  "Deedra Carrington"
];

const PHONE_NUMBERS = [
  [303, 522, 8897],
  [456, 363, 3283],
  [673, 454, 1111],
  [303, 585, 2356],
  [234, 653, 2523],
  [243, 234, 5462]
];

const EVENT_TYPE = [
  'bill',
  'event',
  'service'
];

const SOJO_EVENTS = [
  ['Package Received', 'You have a package to pick up at the main office.', EVENT_TYPE[1], new Date (2017, 12, 6, 12), true],
  ['A/C Service Appointment', 'Maintenance will be by to change air filter.', EVENT_TYPE[2], new Date (2017, 12, 17, 12), true],
  ['A Message From Your Landlord', 'Eagle Drive will be closed for renovations. Please follow signs.', EVENT_TYPE[1], new Date (2017, 12, 4, 12), false],
  ['Christmas Social', 'Come celebrate holiday cheer with us from 3pm-6pm in the main office!', EVENT_TYPE[1], new Date (2017, 12, 22, 12), false],
  ['foo','bar', EVENT_TYPE[1], new Date (), false],
  ['foo','barr', EVENT_TYPE[1], new Date (), true]
];

const LEASES = [
  [500, new Date (2017, 12, 6), new Date (2018, 12, 6), 'One year lease'],
  [800, new Date (2017, 5, 1), new Date (2018, 5, 1), 'One year lease'],
  [1000, new Date (2017, 9, 5), new Date (2019, 9, 5), 'Two year lease'],
  [1000, new Date (2017, 1, 2), new Date (2018, 1, 2), 'One year lease'],
  [900, new Date (2017, 1, 2), new Date (2018, 1, 2), 'One year lease'],
  [1200, new Date (2017, 1, 2), new Date (2018, 1, 2), 'One year lease'],
];

const UNITS = [
  ['A', '221', '123 Foobar Ln.', 'Indianapolis', 'Indiana', 46112 ],
  ['B', '221', '123 Foobar Ln.', 'Indianapolis', 'Indiana', 46112 ],
  ['F', '324', '123 Foobar Ln.', 'Indianapolis', 'Indiana', 46112 ],
  ['B', '366', '123 Foobar Ln.', 'Indianapolis', 'Indiana', 46112 ],
  ['H', '354', '123 Foobar Ln.', 'Indianapolis', 'Indiana', 46112 ],
  ['A', '344', '123 Foobar Ln.', 'Indianapolis', 'Indiana', 46112 ],
];

const COMPANY = [
  ['att'],
  ['comcast'],
  ['brighthouse']
];

const ACTIVATION_CODES = [
  'djew8fe32r',
  '5y4b5vfwef'
];

const ACCT_PICTURE = [
  "http://kylepeeler.io/files/samreeseavatar.png"
]

// ------------------

const is_test = (process.env.NODE_ENV === 'test');

module.exports = (is_test) ? {} : { 
  clients: dab.times (1, (i, opts, callback) => {
    let name = 'ember-sojo-frontend';
    let client_id = process.env.CLIENT_OBJECT_ID;
    let client_secret = process.env.CLIENT_SECRET;
    let recaptcha_secret = process.env.RECAPTCHA_SECRET;

    return callback(null, {
      _id: client_id,
      name,
      client_secret,
      email: name + '@no-reply.com',
      type: 'native',
      scope: [gatekeeper.scope.account.create],
      recaptcha_secret
    });
  }),

  accounts: dab.times (1, (i, opts, callback) => {
    var username = 'ember-sojo-frontend';
   
    return callback(null, {
      created_by: dab.ref ('clients.0'),
      username,
      password: username,
      email: username + '@no-reply.com'
    });
  }),


  user_tokens: dab.map (dab.get ('accounts'), (account, opts, callback) => {
    const clientIndex = LOGIN_CLIENTS[account.username];
  
    return callback(null, {
      client: dab.get ('clients.0'),
      account: account._id,
      refresh_token: new ObjectId (),
      scope: scopes[clientIndex]
    });
  }),

  client_tokens: dab.map (dab.get ('clients'), (client, opts, callback) => {
    return callback (null, {client: client._id});
  }),

  profiles: dab.times (6, (i, opts, callback) => {
    return callback (null, {
      full_name: FULL_NAMES[i],
      has_bill_pay_setup: false,
      has_signed_lease: false,
      phone: '(' + PHONE_NUMBERS[i][0] + ') ' + PHONE_NUMBERS[i][1] + '-' + PHONE_NUMBERS[i][2],
      account_id: null,
      account_picture_url:  (i === 0) ? ACCT_PICTURE[0] : null,
      electric_utility: dab.ref ('utilities.0'),
      cable_utility: dab.ref ('utilities.0')
    });
  }),

  sojo_events: dab.times (4, (i, opts, callback) => {
    console.log (SOJO_EVENTS[i][4]);
   return (SOJO_EVENTS[i][4]) ?
      callback (null, {
        name: SOJO_EVENTS[i][0],
        date: SOJO_EVENTS[i][3],
        start_time: SOJO_EVENTS[i][3],
        end_time: SOJO_EVENTS[i][3],
        description: SOJO_EVENTS[i][1],
        type: SOJO_EVENTS[i][2],
        account_id: null
      })
    :
      callback (null, {
        name: SOJO_EVENTS[i][0],
        date: SOJO_EVENTS[i][3],
        start_time: SOJO_EVENTS[i][3],
        end_time: SOJO_EVENTS[i][3],
        description: SOJO_EVENTS[i][1],
        type: SOJO_EVENTS[i][2],
      })
  }),

  leases: dab.times (6, (i, opts, callback) => {
    return callback (null, {
      rent_amount: LEASES[i][0],
      start_date: LEASES[i][1],
      end_date: LEASES[i][2],
      lease_type: LEASES[i][3],
      account_id: null
    });
  }),

  units: dab.times (6, (i, opts, callback) => {
    return callback (null, {
      unit_index: UNITS[i][0],
      building_index: UNITS[i][1],
      address: UNITS[i][2],
      city: UNITS[i][3],
      state: UNITS[i][4],
      zip: UNITS[i][5],
      maintenance_email: 'main@no-reply.com',
      landlord_email: 'landlord@no-reply.com',
      account_id: null
    });
  }),

  utilities: dab.map (dab.get ('accounts'), (account, opts, callback) => {
    return callback (null, {
      company_name: COMPANY[0],
      url: COMPANY[0] + '.com',
      due_date: new Date(),
      account_id: null,
    });
  }),

  bootstraps: dab.map (dab.get ('accounts'), (account, opts, callback) => {
    const activation_code = ACTIVATION_CODES[0]; 

    return callback (null, {
      profile: dab.ref ('profiles.0'),
      unit: dab.ref ('units.0'),
      lease: dab.ref ('leases.0'),
      sojo_event: [dab.ref ('sojo_events.0'), dab.ref ('sojo_events.1')],
      activation_code,
      is_activated: false
    });
  })
};
