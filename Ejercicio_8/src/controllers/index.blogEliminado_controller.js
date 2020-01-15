// Archivo: index.blogEliminado_controller.js
// Objetivo: Controlador de Angular llamado 'indexBlogEliminadoController' para la gestión de blogs eliminados.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-12.
// Comentarios: N/A

(function(){

  // Definición de los controladores.
  angular.module("indexModule").controller("indexBlogEliminadoController", indexBlogEliminadoController);

  /*@ngInject*/
  function indexBlogEliminadoController($location, userService, blogService) {
    var vm = this;

    // Módelo del cliente.
    vm.model = {
      lastId : 0,
      userName : "",
      flgIsLogged : false,
      eliminadoBlog : []
    };

    // Funciones internas.
    vm.isActiveUser = isActiveUser;
    vm.isUserName = isUserName;
    vm.getBlogs = getBlogs;
    vm.redirectToMain = redirectToMain;
    vm.restaurarComentario = restaurarComentario;

    // Constructor.
    initialize();

    // Devolvemos el scope.
    return vm;

    // Constructor del objeto Model.
    function initialize() {
      vm.model.lastId = 0;
      vm.model.userName = isUserName();
      vm.model.flgIsLogged = isActiveUser();
      vm.model.eliminadoBlog = getBlogs();
      vm.model.totalRows = 0;
    }

    // Función que indica si el usuario está activo.
    function isActiveUser() {
      return userService.flgIsLogged;
    }

    // Función que devuelve el nombre del usuario activo.
    function isUserName() {
      return userService.userName;
    }

    // Función que devuelve los blogs eliminados.
    function getBlogs() {
      return blogService.blogsNuevos;
    }

    // --------------------------------
    // Funciones de redireccionamiento.
    // --------------------------------

    // Redireccionar a la pantalla principal.
    function redirectToMain() {
      $location.path("/").search({});  // Redirecciono al modelo y limpio parámetros.
    }

    // Reataurar comentario.
    function restaurarComentario(id) {
      // Obtengo el indice de la lista de los blogs eliminados el blog con el Id seleccionado.
      var objIndex = blogService.blogsNuevos.findIndex(obj => obj.idComentario === id && obj.flgEliminado === true);

      // Actualizo los atributos del blog activo por el indice.
      blogService.blogsNuevos[objIndex].autorComentario = isUserName(),
      blogService.blogsNuevos[objIndex].fechaActualizacion = new Date();
      blogService.blogsNuevos[objIndex].flgEliminado = false;

      // Redirecciono a la pantalla principal.
      redirectToMain();
    }
  }
})(); // Fin de la sección de controladores.