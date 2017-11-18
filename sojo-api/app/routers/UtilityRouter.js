module.exports = {
  '/utility': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'UtilityController',
      deny: ['getOne']
    }
  }
}
