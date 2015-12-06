'use strict';

angular.module('quizzCode.administrateur', [
        'ui.bootstrap',
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state("administrateur.comptes-enseignant", {
                url: "/comptes-enseignant",
                templateUrl: "administrateur/administrateur-comptes-enseignant.html"
            })
            .state("administrateur.comptes-etudiant", {
                url: "/comptes-etudiant",
                templateUrl: "administrateur/administrateur-comptes-etudiant.html"
            });

        $urlRouterProvider.otherwise("/administrateur/comptes-enseignant");

        /*
         $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
         });
         */
    });
