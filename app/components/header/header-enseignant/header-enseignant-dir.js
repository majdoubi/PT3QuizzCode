'use strict';

angular.module( "quizzCode.header.headerEnseignant")
    .directive( "headerEnseignant", headerEnseignant);


function headerEnseignant(){
   return {
       templateUrl: "components/header/header-enseignant/header-enseignant.html",
       transclude: false
   };

}
