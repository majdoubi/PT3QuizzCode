//TODO Le service doit retourner le type d’utilisateur en fonction du login
angular.module('quizzCode.permissions').service('User', function () {
    var user = this;
    user.type = "enseignant";

    user.logout = function logout($location){
        $location.path('/login');
        user.type = "";
    }
});
