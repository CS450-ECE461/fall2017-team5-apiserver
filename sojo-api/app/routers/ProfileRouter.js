module.exports = {
  '/profiles': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'ProfileController',
      allow: ['create', 'getOne', 'getAll', 'update'], 
    },
    '/:id': {
    }
  }
}
