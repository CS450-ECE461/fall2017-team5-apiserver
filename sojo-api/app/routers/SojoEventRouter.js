module.exports = {
  '/events': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'SojoEventController',
      deny: ['getAll'],
    },
    get: { action: 'SojoEventController@get' },
    '/account': {
      '/:accountId': {
        get: { action: 'SojoEventController@getAccountEvents'}
      }
    }
  }
}
