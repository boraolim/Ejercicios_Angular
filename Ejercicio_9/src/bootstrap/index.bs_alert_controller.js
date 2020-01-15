// Archivo: index.blogAcitvo_controller.js
// Objetivo: Controlador de Angular llamado 'indexBsTabController' para la gestión de blogs activos.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-12.
// Comentarios: N/A

(function(){

    // Definición de los controladores.
    angular.module("indexModule").controller("indexBsAlertController", indexBsAlertController);
  
    /*@ngInject*/
    function indexBsAlertController() {
      var vm = this;
  
      vm.alerts = [{ type: "danger", msg: "Oh snap! Change a few things up and try submitting again." },
                   { type: "success", msg: "Well done! You successfully read this important alert message." }];
  
      // Funciones internas.
      vm.addAlert = addAlert;
      vm.closeAlert = closeAlert;
      vm.theChangeTitle = theChangeTitle;
  
      return vm;
  
      function addAlert() {
        vm.alerts.push({ msg: "Another alert!"});
      }

      function closeAlert(index) {
        vm.alerts.splice(index, 1);
      }

      function theChangeTitle(title) {
        alert(title);
      }
    }
  })(); // Fin del módulo.