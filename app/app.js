'use strict';

// Declare app level module which depends on views, and components
angular.module('quizzCode', [
  'ngRoute',
  'quizzCode.header',
  'quizzCode.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

