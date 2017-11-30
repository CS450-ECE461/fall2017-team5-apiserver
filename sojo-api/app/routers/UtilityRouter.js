module.exports = {
  '/utilities': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'UtilityController',
      deny: ['getAll']
    }
  }
}
