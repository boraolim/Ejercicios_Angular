// Archivo: index.navBar_controller.js
// Objetivo: Módulo principal de la aplicación de Angular.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-11.
// Comentarios: N/A

(function() {
   
  angular.module("indexModule").controller("indexDropdownController", indexDropdownController);
  
  /*@ngInject*/
  function indexDropdownController() {
    var vm = this;
  
    vm.isCollapsed = true;
    vm.status = {
      isopen: false
    }
  }
}());