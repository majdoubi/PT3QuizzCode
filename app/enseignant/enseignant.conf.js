'use strict';

angular.module('quizzCode.enseignant', [
        'ui.bootstrap',
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state("enseignant.qcm", {
                url: "/qcm",
                templateUrl: "enseignant/enseignant-qcm.html"
            })
            .state("enseignant.tests", {
                url: "/tests",
                templateUrl: "enseignant/enseignant-tests.html"
            })
            .state("enseignant.listes", {
                url: "/listes",
                templateUrl: "enseignant/enseignant-listes.html"
            })
            .state("enseignant.comptes", {
                url: "/comptes",
                templateUrl: "enseignant/enseignant-comptes.html"
            });

        $urlRouterProvider.otherwise("/enseignant/qcm");

        /*
         $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
         });
         */
    });
