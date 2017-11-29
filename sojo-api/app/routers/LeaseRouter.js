let cors = require ('cors')
;

const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'DELETE']
};

module.exports = {
  '/leases': {
    use: [cors (corsOptions)],
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'LeaseController',
      deny: ['getAll', 'create', 'delete']
    }
  }
}
