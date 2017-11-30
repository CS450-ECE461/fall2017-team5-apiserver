let cors = require ('cors')
;

const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'DELETE']
};

module.exports = {
  '/profiles': {
    use: [cors (corsOptions)],
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'ProfileController',
      deny: ['getAll', 'create']
    }
  }
}
