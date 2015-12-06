'use strict';

angular.module('quizzCode.etudiant', [
        'ui.bootstrap',
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider.state("etudiant.qcm-en-cours", {
                url: "/qcm-en-cours",
                templateUrl: "etudiant/etudiant-qcm-en-cours.html"
            })
            .state("etudiant.qcm-fini", {
                url: "/qcm-fini",
                templateUrl: "etudiant/etudiant-qcm-fini.html"
            });

        $urlRouterProvider.otherwise("/etudiant/qcm-en-cours");

        /*
         $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
         });
         */
    });
