module.exports = {
  '/payment_history': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'PaymentHistoryController',
      deny: ['update', 'delete']
    }
  }
}