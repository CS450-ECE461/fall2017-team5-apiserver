// app/routers/EndpointRouter.js
const blueprint = require ('@onehilltech/blueprint')
,     cors      = require ('cors')
;

module.exports = exports = {
  '/gatekeeper': [
    cors(),
    blueprint('router://@onehilltech/blueprint-gatekeeper:v1')
  ]
};
