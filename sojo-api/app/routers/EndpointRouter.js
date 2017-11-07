// app/routers/EndpointRouter.js
const blueprint = require ('@onehilltech/blueprint')
;

module.exports = exports = {
  '/gatekeeper': blueprint('router://@onehilltech/blueprint-gatekeeper:v1')
};