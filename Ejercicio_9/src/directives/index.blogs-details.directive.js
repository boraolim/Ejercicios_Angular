// Archivo: index.blogs-details.directive.js
// Objetivo: Directiva de Angular llamado 'blogsDetailsDirective' para la gestión de blogs activos.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-12.
// Comentarios: N/A

(function(){

  angular.module("indexModule").directive("blogsDetailsDirective", blogsDetailsDirective);
  
  /* @ngInject */
  function blogsDetailsDirective() {

      var directive = {
          templateUrl: "./views/templates/blogs-details.template.html",
          restrict: "EA",
          scope: {
              title : "@",
              onchangetitle : "&",
              onaddnewblog : "&"
          },
          controller : function($scope) {
              // Cambiar el título.
              $scope.changeTitle = function() {
                  title = "Otra prueba diferente de como usar Directivas de Angular JS. Saludos cordiales..";
                  $scope.onchangetitle()(title);
              };

              $scope.addnewblog = function() {
                title = "Agregar nuevo blog.";
                $scope.addnewblog()(title);
              };
          }
      }

      return directive;
  }   
})(); // Fin de la directiva de Angular JS.