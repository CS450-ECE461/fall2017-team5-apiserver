let cors = require ('cors')
;

const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'DELETE']
};

module.exports = {
  '/utilities': {
    use: [cors (corsOptions)],
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'UtilityController',
      deny: ['getAll']
    }
  }
}
