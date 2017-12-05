// app/routers/EndpointRouter.js
const blueprint = require ('@onehilltech/blueprint')
,     cors      = require ('cors')
;

const corsOptions = {
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'SEARCH']
};

module.exports = exports = {
  '/': {
    use: [
      cors(corsOptions)
    ]
  },

  '/gatekeeper': [
    blueprint('router://@onehilltech/blueprint-gatekeeper:v1'),
  ]
};
