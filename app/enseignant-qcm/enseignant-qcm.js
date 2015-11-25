'use strict';

angular.module('myApp.enseignant-qcm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/enseignant-qcm', {
    templateUrl: 'enseignant-qcm/enseignant-qcm.html',
    controller: 'EnseignantQcmCtrl'
  });
}])

.controller('EnseignantQcmCtrl', [function() {

}]);
