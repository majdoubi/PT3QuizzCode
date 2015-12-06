'use strict';

angular.module('quizzCode.header', [
    'ui.bootstrap',
    'ui.router'
])
    .controller('HeaderCtrl', HeaderCtrl);


function HeaderCtrl($scope, $state, User) {
    $scope.username = User.type;
    $scope.usertype = User.type;

    if(User.type === 'enseignant') {
        $scope.tabs = [
            {title: 'QCM', state: 'qcm', content: 'QCM'},
            {title: 'Tests', state: 'tests', content: 'Tests'},
            {title: 'Listes', state: 'listes', content: 'Listes'},
            {title: 'Comptes', state: 'comptes', content: 'Comptes'}
        ];
    }
    else if(User.type === 'etudiant'){
        $scope.tabs = [
            {title: 'QCM en cours', state: 'qcm-en-cours'},
            {title: 'QCM fini', state: 'qcm-fini'}
        ];
    }
    else if(User.type === 'administrateur'){
        $scope.tabs = [
            {title: 'Comptes enseignant', state: 'comptes-enseignant'},
            {title: 'Comptes etudiant', state: 'comptes-etudiant'}
        ];
    }
    else{
        $scope.tabs = [
            {title: 'Erreur', state: 'login'}
        ];
    }

  $scope.$on("$stateChangeSuccess", function(){
      $scope.tabs.forEach(function(tab){
          tab.active = $state.includes(User.type+"."+tab.state);
      });
  });
}
