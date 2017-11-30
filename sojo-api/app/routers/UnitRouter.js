let cors = require ('cors')
;

const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'DELETE']
};

module.exports = {
  '/units': {
    use: [cors (corsOptions)],
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'UnitController',
      deny: ['getAll', 'update', 'create', 'delete']
    }
  }
}
