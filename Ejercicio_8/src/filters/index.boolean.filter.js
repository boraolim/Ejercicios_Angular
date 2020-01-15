// Archivo: index.boolean.filter.js
// Objetivo: Filtro de Angular llamado 'inputboolToText' para convertir valores booleanos a texto.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-12.
// Comentarios: N/A

(function () {

  angular.module("indexModule").filter("inputboolToText", inputboolToText);

  /*@ngInject*/
  function inputboolToText() {
        
    return function(input) {
      switch(input)
      {
        case false:
          return "NO";
        default:
          return "SI";
      }
    }
  }

})();