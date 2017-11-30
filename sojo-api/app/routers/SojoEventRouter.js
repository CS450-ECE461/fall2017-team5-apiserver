let cors = require ('cors')
;

const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'DELETE']
};

module.exports = {
  '/events': {
    use: [cors (corsOptions)],
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'SojoEventController',
      deny: ['getOne']
    }
  }
}
