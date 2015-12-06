//TODO Le service doit retourner le type d’utilisateur en fonction du login
angular.module('quizzCode.permissions').service('User', function () {
    var service = {
        type: 'administrateur',
        nom: 'Mr. Finck',

        setType: function (type) {
            service.type = type;
        }
    };
    return service;
});
