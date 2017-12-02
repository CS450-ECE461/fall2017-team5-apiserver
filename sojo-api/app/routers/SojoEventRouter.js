module.exports = {
  '/events': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'SojoEventController'
    }
  }
}
