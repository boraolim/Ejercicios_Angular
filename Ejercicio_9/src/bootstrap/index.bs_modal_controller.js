// Archivo: index.blogAcitvo_controller.js
// Objetivo: Controlador de Angular llamado 'indexBsTabController' para la gestión de blogs activos.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-12.
// Comentarios: N/A

(function(){

    angular.module("indexModule").controller("indexBsModalContentController", indexBsModalContentController);
  
    /*@ngInject*/
    function indexBsModalContentController($uibModalInstance, data) {
        var pc = this;
        pc.data = data;
        pc.ok=ok;
        pc.cancel=cancel;
        return pc;
 
        function ok(){
            $uibModalInstance.close("Ok");
        }
 
        function cancel(){
            $uibModalInstance.dismiss();
        }
    }
  })();