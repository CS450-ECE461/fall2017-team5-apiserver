let cors = require ('cors')
;

const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'DELETE']
};

module.exports = {
  use: [cors (corsOptions)],
  '/profiles': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'ProfileController',
      deny: ['getAll', 'create']
    }
  }
}
