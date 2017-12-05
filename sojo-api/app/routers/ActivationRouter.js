const cors = require ('cors')
;

const corsOptions = {
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'SEARCH']
};

module.exports = {
  '/confirm': {
    use: [cors (corsOptions)],
    policy: 'gatekeeper.auth.bearer',
    post: { action: 'ActivationController', policy: 'gatekeeper.account.isMe' }
  }
}
