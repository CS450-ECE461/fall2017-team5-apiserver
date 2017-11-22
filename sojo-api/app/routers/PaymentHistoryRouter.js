module.exports = {
  '/histories': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'PaymentHistoryController',
      deny: ['update', 'delete']
    }
  }
}