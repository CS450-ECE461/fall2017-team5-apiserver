let cors = require ('cors')
;

const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
};

module.exports = {
  use: [cors (corsOptions)],
  '/leases': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'LeaseController',
    }
  }
}
