'use strict';

angular.module('quizzCode.login')
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){

   $stateProvider.state("login.qcm", { url: "/qcm", templateUrl: "login/login-qcm.html" })
                .state("login.comptes", { url: "/comptes", templateUrl: "login/login-comptes.html" });

   $urlRouterProvider.otherwise("/enseignant/qcm");

   /*
   $locationProvider.html5Mode({
       enabled: true,
       requireBase: false
   });
   */
});
