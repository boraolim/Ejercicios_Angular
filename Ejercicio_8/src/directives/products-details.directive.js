// Archivo: index.blogAcitvo_controller.js
// Objetivo: Controlador de Angular llamado 'indexBsTabController' para la gestión de blogs activos.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-12.
// Comentarios: N/A

(function(){

    angular.module("indexModule").directive("productsDetailsDirective", productsDetailsDirective);
    
    /* @ngInject */
    function productsDetailsDirective() {

        var directive = {
            templateUrl: "./views/templates/products-details.template.html",
            restrict: "EA",
            scope: {
                title : "@",
                onchangetitle : "&"
            },
            controller : function($scope) {
                $scope.changeTitle = function() {
                    title = "¡El texto ha cambiado! Gracias por usar esta directiva de usuario de Angular JS y a la Pelikan.";
                    $scope.onchangetitle()(title);
                }
            }
        }

        return directive;
    }   
})(); // Fin de la directiva de Angular JS.