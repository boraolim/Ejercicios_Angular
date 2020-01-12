(function() {

    angular.module('indexModule', ["ngRoute"]).config(configApp).run(runApp);

    function configApp($routeProvider) {

        // Configuracion de nuestro routing.
        $routeProvider.when("/", {
                                  templateUrl: "views/page1.html",
                                  controller: "indexBlogController",
                                  controllerAs: "vm"
                                 })
                      .when("/blogEliminado", {
                                  templateUrl: "views/page2.html",
                                  controller: "indexBlogEliminadoController",
                                  controllerAs: "vm"
                                 })
                      .when("/blogAdd", {
                                  templateUrl: "views/page3.html",
                                  controller: "indexBlogController",
                                  controllerAs: "vm"
                                })
                      .when("/blogDetail/:blogId", {
                                  templateUrl: "views/page4.html",
                                  controller: "indexBlogController",
                                  controllerAs: "vm"
                                })                                                                 
                      .when("/blogEdit/:blogId", {
                                  templateUrl: "views/page5.html",
                                  controller: "indexBlogController",
                                  controllerAs: "vm"
                                })                                                                                                 
                      .otherwise({
                                   redirectTo: '/'
                                 });                                 
    }

    function runApp() {
        // Direcciones de la API.
    }

})();