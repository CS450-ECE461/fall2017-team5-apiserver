let cors = require ('cors')
;

const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'DELETE']
};

module.exports = {
  use: [cors (corsOptions)],
  '/utilities': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'UtilityController',
      deny: ['getAll']
    }
  }
}
