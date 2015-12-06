'use strict';

// Declare app level module which depends on views, and components
angular.module('quizzCode', [
    'quizzCode.permissions',
    'quizzCode.administrateur',
    'quizzCode.enseignant',
    'quizzCode.etudiant',
    'quizzCode.header',
    'quizzCode.login',
    'quizzCode.version'
]).
config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
        .state("login", {
            url:"/login",
            templateUrl:"login/login.html",
            controller:"LoginCtrl"
        })
        .state("enseignant", {
            abstract: true,
            url:"/enseignant",
            templateUrl:"header/header.html",
            data:{
                permissions:{
                    only: ['enseignant'],
                    redirectTo: 'login'
                }
            }
        })
        .state("etudiant", {
            abstract: true,
            url:"/etudiant",
            templateUrl:"header/header.html",
            data:{
                permissions:{
                    only: ['etudiant'],
                    redirectTo: 'login'
                }
            }
        })
        .state("administrateur", {
            abstract: true,
            url:"/administrateur",
            templateUrl:"header/header.html",
            data:{
                permissions:{
                    only: ['administrateur'],
                    redirectTo: 'login'
                }
            }
        });

    $urlRouterProvider.otherwise("/login");

    /*
    $locationProvider.html5Mode({
     enabled: true,
     requireBase: false
    });
         */
});

