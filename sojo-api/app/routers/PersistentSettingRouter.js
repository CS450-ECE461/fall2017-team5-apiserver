module.exports = {
  '/settings': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'PersistentSettingController',
      deny: ['getAll', 'create', 'delete']
    }
  }
}
