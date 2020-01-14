// Archivo: index.blogAcitvo_controller.js
// Objetivo: Controlador de Angular llamado 'indexBsTabController' para la gestión de blogs activos.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-12.
// Comentarios: N/A

(function(){

  // Definición de los controladores.
  angular.module("indexModule").controller("indexBsTabController", indexBsTabController);

  /*@ngInject*/
  function indexBsTabController($window) {
    var vm = this;

    vm.tabs = [{ title: "Dynamic Title 1", content: "Dynamic content 1" },
               { title: "Dynamic Title 2", content: "Dynamic content 2", disabled: true }];

    vm.model = {
        name: 'Tabs'
    };

    // Funciones internas.
    vm.alertMe = alertMe;

    return vm;

    function alertMe() {
      setTimeout(function() { $window.alert('You\'ve selected the alert tab!'); });
    }
  }
})();