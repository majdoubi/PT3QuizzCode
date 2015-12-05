'use strict';

angular.module('quizzCode.enseignantQcm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/enseignant-qcm', {
    templateUrl: 'enseignant/enseignant-qcm/enseignant-qcm.html',
    controller: 'EnseignantQcmCtrl'
  });
}])

.controller('EnseignantQcmCtrl', [function() {

}]);
