module.exports = {
  '/payments': {
    policy: 'gatekeeper.auth.bearer',
    resource: {
      controller: 'PaymentController',
      deny: ['getAll', 'update', 'delete']
    },
    '/:resourceId': {
      '/rent': {
        get: { action: 'PaymentController@getAllRentPayments' },
        '/:leaseId': {
          get: { action: 'PaymentController@getOneRentPayment' },
        },
      },
      '/utility': {
        get: { action: 'PaymentController@getAllUtilityPayments' },
        '/:utilityId': {
          get: { action: 'PaymentController@getOneUtilityPayment' },
        },
      },
    },
  }
}
