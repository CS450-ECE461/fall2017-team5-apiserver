module.exports = {
  '/units': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'UnitController',
      deny: ['getAll', 'update', 'create', 'delete']
    }
  }
}
