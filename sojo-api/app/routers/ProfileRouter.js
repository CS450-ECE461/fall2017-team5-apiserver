module.exports = {
  '/profiles': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'ProfileController',
      deny: ['getAll'],
    },
  }
};
