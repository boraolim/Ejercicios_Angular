// Archivo: index.login_controller.js
// Objetivo: Controlador de Angular llamado 'indexBlogController' para la gestión de cuentas de usuario.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-12.
// Comentarios: N/A

(function() {

    angular.module("indexModule").controller("indexController", indexController);
  
    /*@ngInject*/
    function indexController($uibModal) {
      var vm = this;
      
      vm.model = {
        msjEliminado : false
      };
  
      // Funciones internas.
      vm.open = open;

      // Devolvemos el scope.
      return vm;
  
      function open() {
        debugger;
        var modalInstance =  $uibModal.open({
            templateUrl: "views/page6.html",
            controller: "indexBsModalContentController",
            controllerAs: "pc",
            size: "",
            resolve: {
                data: function () {
                  return vm.model.msjEliminado;
                }
              }
          });
        
          modalInstance.result.then(function(response){
            
          });

        }
    }
  })();