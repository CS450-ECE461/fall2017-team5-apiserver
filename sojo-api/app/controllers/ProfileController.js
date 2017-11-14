var blueprint            = require ('@onehilltech/blueprint')
    , mongodb            = require ('@onehilltech/blueprint-mongodb')
    , ResourceController = mongodb.ResourceController
    , Profile            = require ('../models/Profile')
;

function ProfileController () {
    ResourceController.call (this, {model: Profile});
}

ProfileController.prototype.showName = function(){
    return function(req, res){

    }
};

blueprint.controller (ProfileController, ResourceController);

module.exports = exports = ProfileController;