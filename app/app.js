'use strict';

// Declare app level module which depends on views, and components
angular.module('quizzCode', [
    'quizzCode.permissions',
    'quizzCode.header',
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
            abstact: true,
            url:"/enseignant",
            template:"<ui-view/>",
            data:{
                permissions:{
                    only: ['enseignant'],
                    redirectTo: 'login'
                }
            }
        });
        //.state("enseignant", {abstact: true, url:"/enseignant", template:"<ui-view/>", data: {access: access.enseignant} });
        //.state("etudiant", {abstact: true, url:"/etudiant", template:"<ui-view/>", data: {access: access.etudiant} })
        //.state("administrateur", {abstact: true, url:"/administateur", template:"<ui-view/>", data: {access: access.administateur} });

    $urlRouterProvider.otherwise("/enseignant/qcm");

    /*
    $locationProvider.html5Mode({
     enabled: true,
     requireBase: false
    });
         */
});

