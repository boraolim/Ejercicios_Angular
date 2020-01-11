// Sección de controladores.
(function(){

  // Definición de los controladores.
  angular.module("indexModule").controller("indexBlogEliminadoController", indexBlogEliminadoController);

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
      return blogService.blogsEliminados;
    }

    // --------------------------------
    // Funciones de redireccionamiento.
    // --------------------------------
    
    // Redireccionar a la pantalla principal.
    function redirectToMain() {
      $location.path("/");  // Redirecciono al modelo.
    }

    // Reataurar comentario.
    function restaurarComentario(id) {
      // Obtengo el indice de la lista de los blogs eliminados el blog con el Id seleccionado.
      var objIndex = blogService.blogsEliminados.findIndex(obj => obj.idComentario === id);

      // Actualizo los atributos del blog activo por el indice.
      blogService.blogsEliminados[objIndex].autorComentario = isUserName(),
      blogService.blogsEliminados[objIndex].FechaActualizacion = new Date();
      blogService.blogsEliminados[objIndex].FlgEliminado = false;

      // Tomo el objeto modificado para asignarselo a una variable.
      var _obj = blogService.blogsEliminados[objIndex];
  
      // Elimino el objeto seleccionado de la lista de blogs eliminados sobre el indice.
      blogService.blogsEliminados.splice(objIndex, 1);

      // Lo inserto a los blogs nuevos.
      blogService.blogsNuevos.push(_obj);

      // Redirecciono a la pantalla principal.
      redirectToMain();
    }
  }
})(); // Fin de la sección de controladores.