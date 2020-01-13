// Archivo: index.boolean.filter.js
// Objetivo: Filtro de Angular llamado 'inputboolToText' para convertir valores booleanos a texto.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-12.
// Comentarios: N/A

(function () {

  angular.module("indexModule").filter("inputIdToText", inputIdToText);

  function inputIdToText() {

    return function(input) {

      if (input <= 5)
      {
        return "A-00" + input.toString();
      }
      else if (input >= 6 & input <= 10)
      {
        return (input == 10) ? "B-0" + input.toString() : "B-00" + input.toString();
      }
      else
      {
        return "Z-0" + input.toString();
      }
    }
  }
})();