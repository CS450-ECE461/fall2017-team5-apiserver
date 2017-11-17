module.exports = {
  '/profiles': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'ProfileController',
      deny: ['getAll']
    },
    '/:id': {
      get: { action: 'ProfileController@Me' },
      '/events': {
        get: { action: 'ProfileController@getEvents' },
        '/:id': {
          get: { action: 'ProfileController@getEventById' },
        }
      },
      '/utilities': {
        get: { action: 'ProfileController@getUtilities' },
        '/:id': {
          get: { action: 'ProfileController@getUtilityById' },
        }
      }
    }
  }
}
