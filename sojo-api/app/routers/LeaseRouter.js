let cors = require ('cors')
;

const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'DELETE']
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
