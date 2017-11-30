module.exports = {
  '/leases': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'LeaseController',
    }
  }
}
