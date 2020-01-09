// Servicio principal.
(function () {

    angular.module("indexModule").factory("dataService", dataService);

    function dataService() {       
        var service = this;

        // Elementos nuevos (pendiente de llenar).
        service.blogNuevo = [];

        // Elementos eliminados.
        service.blogEliminado = [];

        // Arreglo de nombres de productos.
        service.arryNombreProducto = [{ id: 0, name: "PoliciyCheck" }, 
                                      { id: 1, name: "AutoCheck" }, 
                                      { id: 2, name: "PostMaster" }, 
                                      { id: 3, name: "EasyClaim" }];

        // Arreglo de cuentas de usuario.
        service.arryUsers = [{ id: 0, name: "Iliana Tavera" }, 
                             { id: 1, name: "Sheila Solis" }, 
                             { id: 2, name: "Olimpo Bonilla" }, 
                             { id: 3, name: "Patricia Lara" }];
      
        // Funciones internas.
        service.getIdToString = getIdToString;

        // Devolvemos el scope.
        return service;
    }

})();