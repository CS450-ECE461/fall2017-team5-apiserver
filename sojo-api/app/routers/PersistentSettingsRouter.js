module.exports = {
  '/settings': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'PersistentSettingsController',
      deny: ['getAll', 'create', 'delete']
    }
  }
}
