'use strict';

angular.module( "myApp.header.headerEnseignant")
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/header-enseignant', {
            templateUrl: 'components/header/header-enseignant/header-enseignant.html',
            controller: 'HeaderEnseignant'
        });
    }])
    .controller( "HeaderEnseignantCtrl", HeaderEnseignantCtrl);

function HeaderEnseignantCtrl(){
    var vm = this;
    vm.header = {name: "header_enseignant", url: "components/header/header-enseignant/header-enseignant.html"};
    vm.header.name = "headerEnseignant";
    vm.header.url = "components/header/header-enseignant/header-enseignant.html";
}

