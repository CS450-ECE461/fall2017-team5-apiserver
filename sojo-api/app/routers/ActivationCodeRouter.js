const cors = require ('cors')
;

const corsOptions = {
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'SEARCH']
};

module.exports = {
  '/checkcode': {
    use: [cors (corsOptions)],
    post: { action: 'ActivationCodeController' }
  }
}
