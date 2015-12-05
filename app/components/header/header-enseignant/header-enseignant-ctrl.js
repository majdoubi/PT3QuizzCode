'use strict';

angular.module( "myApp.header.headerEnseignant")
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/header-enseignant', {
            templateUrl: 'components/header/header-enseignant/header-enseignant.html',
            controller: 'HeaderEnseignantCtrl',
            controllerAs: 'header',
            transclude: true
        });
    }])
    .controller( "HeaderEnseignantCtrl", HeaderEnseignantCtrl);

function HeaderEnseignantCtrl(){
    var header = this;
    header.name = "headerEnseignant";
    header.url = "components/header/header-enseignant/header-enseignant.html";
}
