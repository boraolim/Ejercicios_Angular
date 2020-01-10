// Servicio principal.
(function () {

    angular.module("indexModule").factory("dataService", dataService);

    function dataService() {       
        var service = this;

        // Elementos nuevos (pendiente de llenar).
        service.blogNuevo = [];

        // Elementos eliminados.
        service.blogEliminado = [];
      
        // Devolvemos el scope.
        return service;
    }

})();