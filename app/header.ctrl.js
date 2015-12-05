'use strict';

angular.module('myApp.headerTest', [
    'ui.bootstrap',
])
    .controller('HeaderCtrl', HeaderCtrl);


function HeaderCtrl($scope, $window) {
  $scope.tabs = [
    { title:'QCM', content:'Dynamic content QCM' },
    { title:'Tests', content:'Dynamic content Tests' },
    { title:'Listes', content:'Dynamic content Listes' },
    { title:'Comptes', content:'Dynamic content Comptes' },
  ]

}
