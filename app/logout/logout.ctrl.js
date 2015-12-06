'use strict';

angular.module('quizzCode.logout', [
        'ui.bootstrap',
        'ui.router'
    ])
    .controller('LogoutCtrl', LogoutCtrl);


//TODO Supprimer les informations de l’utilisateur lors de sa déconnexion
function LogoutCtrl($location, User) {
    //User.logout($location);
}
