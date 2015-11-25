'use strict';

angular.module('myApp.tests', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tests', {
    templateUrl: 'tests/tests.html',
    controller: 'TestsCtrl'
  });
}])

.controller('TestsCtrl', [function() {

}]);
