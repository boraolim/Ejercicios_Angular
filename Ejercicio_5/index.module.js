(function() {

    angular.module('indexModule', ["ngRoute"]).config(configApp).run(runApp);

    function configApp($routeProvider) {

        // Configuracion de nuestro routing.
        $routeProvider
        .when("/", {
            templateUrl: "captura.html",
            controller: "indexController1",
            controllerAs: "vm"
        }).when("/update", {
            templateUrl: "modificar.html",
            controller: "indexController1",
            controllerAs: "vm"
        }).when("/blogActivo", {
            templateUrl: "blogActivo.html",
            controller: "indexController1",
            controllerAs: "vm"
        }).when("/blogEliminado", {
            templateUrl: "blogEliminado.html",
            controller: "indexController2",
            controllerAs: "vm"
        });
    }

    function runApp() {
        // Direcciones de la API.
    }

})();