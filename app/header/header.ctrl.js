'use strict';

angular.module('quizzCode.header', [
    'ui.bootstrap',
    'ui.router'
])
    .controller('HeaderCtrl', HeaderCtrl);


function HeaderCtrl($scope, $state, User) {
    $scope.username = User.type;
    $scope.usertype = User.type;

  $scope.tabs = [
    { title:'QCM', state:'qcm', content:'QCM'},
    { title:'Tests', state:'tests', content:'Tests' },
    { title:'Listes', state:'listes', content:'Listes' },
    { title:'Comptes', state:'comptes', content:'Comptes' }
  ];

  $scope.$on("$stateChangeSuccess", function(){
      $scope.tabs.forEach(function(tab){
          tab.active = $state.includes($scope.usertype+"."+tab.state);
      });
  });
}
