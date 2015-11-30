'use strict';

angular.module( "myApp.header.headerEnseignant")
    .directive( "headerEnseignant", headerEnseignant);


function headerEnseignant(){
   return {
       templateUrl: "components/header/header-enseignant/header-enseignant.html"
   };

}
