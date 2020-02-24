// Archivo: index.blogs-details.directive.js
// Objetivo: Directiva de Angular llamado 'validPasswordConfirm' para la gestión de blogs activos.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-12.
// Comentarios: N/A

(function(){

  // Directiva de validación de contraseñas.
  angular.module('indexModule').directive('equal', equal); 
  
  function equal() {
    var link = function($scope, $element, $attrs, ctrl) {
      ctrl.$validators.equal = function(modelValue, viewValue) {
        var value = modelValue || viewValue;
        var valid = !value || !$attrs.equal || value === $attrs.equal;
        return valid;
      };

      $attrs.$observe('equal', function(comparisonModel){
        ctrl.$validate();
      });
    };

    var directive = {
      require: 'ngModel',
      link: link
    };

    return directive;
  }

})(); // Fin de la directiva de Angular JS.