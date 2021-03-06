// Archivo: index.blogAcitvo_controller.js
// Objetivo: Controlador de Angular llamado 'indexBlogController' para la gestión de blogs activos.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-12.
// Comentarios: N/A

(function(){

  // Definición de los controladores.
  angular.module("indexModule").controller("indexBlogController", indexBlogController);

  function indexBlogController($location, $filter, $routeParams, userService, blogService) {
    var vm = this;

    // Módelo del cliente.
    vm.model = {
      lastId : 0,
      userName : "",
      idParam : 0,
      flgIsLogged : false,
      nuevoBlog : [],
      blogObjeto : {
        idComentario : 0,
        comentarioTxt : "",
        tipoComentario : "",
        nombreProducto : "",
        autorComentario : "",
        fechaAlta : "",
        fechaActualizacion: "",
        flgPrioritario : false,
        flgAlta: true,
        flgEdicion : false,
        flgEliminado : false
      },
      arryNombreProducto : [],
      detailComentario : null
    };

    // Funciones internas.
    vm.isActiveUser = isActiveUser;
    vm.isUserName = isUserName;
    vm.getTiposProductos = getTiposProductos;
    vm.getBlogs = getBlogs;
    vm.redirectToMain = redirectToMain;
    vm.redirectToAdd = redirectToAdd;
    vm.agregarComentario = agregarComentario;
    vm.eliminarComentario = eliminarComentario;
    vm.mostrarComentario = mostrarComentario;
    vm.actualizarComentario = actualizarComentario;

    // Constructor.
    initialize();

    // Devolvemos el scope.
    return vm;

    // Constructor del objeto Model.
    function initialize() {
      vm.model.lastId = 0;
      vm.model.flgIsLogged = isActiveUser();
      vm.model.userName = isUserName();
      vm.model.nuevoBlog = getBlogs();
      vm.model.arryNombreProducto = getTiposProductos();
      vm.model.totalRows = 0;

      vm.model.blogObjeto.idComentario = 0;
      vm.model.blogObjeto.comentarioTxt = "";
      vm.model.blogObjeto.tipoComentario = "Publico";
      vm.model.blogObjeto.nombreProducto = "";
      vm.model.blogObjeto.autorComentario = isUserName();
      vm.model.blogObjeto.fechaAlta = new Date();
      vm.model.blogObjeto.fechaActualizacion = "";
      vm.model.blogObjeto.flgPrioritario = false;
      vm.model.blogObjeto.flgAlta = true;
      vm.model.blogObjeto.flgEdicion = false;
      vm.model.blogObjeto.flgEliminado = false;

      // Aquí verifico si existe un parametro llamado 'blogId'.
      // Si no existe, paso de largo. En caso contrario, obtengo el blog existente.
      if (typeof $routeParams.blogId !== 'undefined' & vm.model.flgIsLogged) {
        mostrarComentario(parseInt($routeParams.blogId));
      }
    }

    // Función que indica si el usuario está activo.
    function isActiveUser() {
      return userService.flgIsLogged;
    }

    // Función que devuelve el nombre del usuario activo.
    function isUserName() {
      return userService.userName;
    }

    // Función que devuelve los tipos de productos.
    function getTiposProductos() {
      return blogService.tipoProductos;
    }

    // Función que devuelve los blogs activos.
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

    // Redireccionar a la pantalla de captura.
    function redirectToAdd() {
      $location.path("/blogAdd").search({});  // Redirecciono al modelo y limpio parámetros.
    }

    // -----------------
    // Operaciones CRUD.
    // -----------------

    // Agregar un blog.
    function agregarComentario()
    {
      vm.model.lastId = blogService.blogsNuevos.length + 1;
      var idPos = vm.model.lastId;

      // Construyo el objeto Comentario.
      var objComentario = {
        idComentario : idPos,
        comentarioTxt : vm.model.blogObjeto.comentarioTxt,
        tipoComentario : vm.model.blogObjeto.tipoComentario,
        nombreProducto : vm.model.blogObjeto.nombreProducto,
        autorComentario : isUserName(),
        flgPrioritario : vm.model.blogObjeto.flgPrioritario,
        fechaAlta : new Date(),
        fechaActualizacion : "",
        flgAlta : true,
        flgEdicion : false,
        flgEliminado : false
      };

      // Guardo el último identificador del comentario.
      vm.model.lastId = idPos;

      // Agrego el nuevo elemento.
      blogService.blogsNuevos.push(objComentario);

      // Obtengo el total de registros.
      vm.model.totalRows = blogService.blogsNuevos.length;

      // Redirecciono a la pantalla principal.
      redirectToMain()
    }

    // Eliminar un blog existente.
    function eliminarComentario(id) {
      // Obtengo de la lista de los blogs activos el blog con el Id seleccionado.
      var objIndex = blogService.blogsNuevos.findIndex(obj => obj.idComentario === id);

      // Asigno valores a los atributos por el indice.
      blogService.blogsNuevos[objIndex].autorComentario = isUserName(),
      blogService.blogsNuevos[objIndex].fechaActualizacion = new Date();
      blogService.blogsNuevos[objIndex].flgEliminado = true;

      // Tomo el objeto modificado para asignarselo a una variable.
      var _obj = blogService.blogsNuevos[objIndex];

      // Elimino el objeto seleccionado de la lista de blogs nuevos sobre el indice.
      blogService.blogsNuevos.splice(objIndex, 1);

      // Lo inserto a los blogs eliminados.
      blogService.blogsEliminados.push(_obj);

      // Total de blogs activos hasta ahora...
      vm.model.totalRows = blogService.blogsNuevos.length;

      // Llamar el servicio como filtro $filter.
      window.alert("Has eliminado el mensaje: " + $filter("inputIdToText")(_obj.idComentario));

      // Redirecciono a la pantalla principal.
      redirectToMain()
    }

    // Mostrar un comentario existente.
    function mostrarComentario(id) {
      // Obtengo de la lista de los blogs activos el blog con el Id seleccionado.
      var objIndex = blogService.blogsNuevos.findIndex(obj => obj.idComentario === id);

      // Obtengo el objeto.
      var obj = blogService.blogsNuevos[objIndex];

      // Leo los atributos del blog activo.
      vm.model.blogObjeto.idComentario = obj.idComentario;
      vm.model.blogObjeto.comentarioTxt = obj.comentarioTxt;
      vm.model.blogObjeto.tipoComentario = obj.tipoComentario;
      vm.model.blogObjeto.flgPrioritario = obj.flgPrioritario;
      vm.model.blogObjeto.flgAlta = false;
      vm.model.blogObjeto.flgEdicion = true;
      vm.model.blogObjeto.flgEliminado = false;

      // Carga de los combos.
      vm.model.blogObjeto.nombreProducto = obj.nombreProducto;
      vm.model.blogObjeto.autorComentario = obj.autorComentario;
    }

    // Actualizar comentario.
    function actualizarComentario(id) {
      // Obtengo el indice de la lista de los blogs activos el blog con el Id seleccionado.
      var objIndex = blogService.blogsNuevos.findIndex(obj => obj.idComentario === id);

      // Actualizo los atributos del blog activo por el indice.
      blogService.blogsNuevos[objIndex].comentarioTxt = vm.model.blogObjeto.comentarioTxt;
      blogService.blogsNuevos[objIndex].tipoComentario = vm.model.blogObjeto.tipoComentario;
      blogService.blogsNuevos[objIndex].nombreProducto = vm.model.blogObjeto.nombreProducto;
      blogService.blogsNuevos[objIndex].autorComentario = vm.model.blogObjeto.autorComentario;
      blogService.blogsNuevos[objIndex].flgPrioritario = vm.model.blogObjeto.flgPrioritario;
      blogService.blogsNuevos[objIndex].fechaActualizacion = new Date();
      blogService.blogsNuevos[objIndex].flgEdicion = false;

      // Redirecciono a la pantalla principal.
      redirectToMain();
    }
  }
})(); // Fin de la sección de controladores.