'use strict';

angular.module('qcm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/qcm', {
    templateUrl: 'qcm/qcm.html',
    controller: 'QcmCtrl'
  });
}])

.controller('QcmCtrl', [function() {

}]);
