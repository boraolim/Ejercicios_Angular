// Archivo: index.login_controller.js
// Objetivo: Controlador de Angular llamado 'indexBlogController' para la gestión de cuentas de usuario.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-12.
// Comentarios: N/A

(function() {

  angular.module('indexModule').controller('indexController', indexController);
  
    /*@ngInject*/
    function indexController() {
      var vm = this;

      // Funciones internas.
      vm.registerPwd = registerPwd;

      return vm;

      function registerPwd() {
        window.alert('Correcto!');
        location.reload();
      }
    }
  })();