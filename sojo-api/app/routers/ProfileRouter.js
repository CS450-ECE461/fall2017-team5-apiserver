module.exports = {
    '/user_profiles': {
        resource: {
            controller: 'ProfileController',

            // optional list of operations to allow
            allow: ['create', 'getOne', 'getAll', 'update', 'delete']
        },
        get: { action: 'ProfileController@showAll' },

        '/:profileId': {
            '/name': {
                get: { action: 'ProfileController@showName' }
            }
        },
    }
};