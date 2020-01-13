// Archivo: index.module.js
// Objetivo: Módulo principal de la aplicación de Angular.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-11.
// Comentarios: N/A

(function() {

  angular.module('indexModule', ["ngRoute", "ui.bootstrap"]).config(configApp).run(runApp);
  
  /*@ngInject*/
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

  /*@ngInject*/
  function runApp() {
    // Direcciones de la API Prueba..
    // Prueba....... FINALIZADA.
  }

})();