'use strict';

// Declare app level module which depends on views, and components
angular.module('quizzCode', [
  'ngRoute',
  'quizzCode.header',
  'quizzCode.version'
]).
config(function($stateProvider, $urlRouterProvider, $locationProvider){

        $stateProvider.state("login", {url:"/login", templateUrl:"enseignant/enseignant-header.html" })
        $urlRouterProvider.otherwise("/");

        /*
         $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
         });
         */
});
