module.exports = {
  '/payments': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'PaymentController',
      deny: ['getAll', 'update', 'delete']
    }
  }
}