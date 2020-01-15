// Archivo: index.blogs-details.directive.js
// Objetivo: Directiva de Angular llamado 'blogsDetailsDirective' para la gestión de blogs activos.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-12.
// Comentarios: N/A

(function(){

  angular.module("indexModule").directive("blogsDetailsDirective", blogsDetailsDirective);
  
  /* @ngInject */
  function blogsDetailsDirective() {

    var directive = {
        templateUrl: "./views/templates/blogs-details.template.html",
        restrict: "EA",
        scope: {
            title : "@",

            // Atributos nuevos.
            blogs : "=",           //Two-way data binding with pro
            
            // Estos atributos del scope no me generaban los botones
            nombreusuario : "=",
            isactivo : "=",

            // Evento.
            onchangetitle : "&"
        },
        controller : function($scope, $location, $filter, userService, blogService) {

            // Eliminar blog.
            $scope.deleteBlog = function(id) {

                // Obtengo de la lista de los blogs activos el blog con el Id seleccionado.
                var objIndex = blogService.blogsNuevos.findIndex(obj => obj.idComentario === id && obj.flgEliminado === false);

                // Asigno valores a los atributos por el indice.
                blogService.blogsNuevos[objIndex].autorComentario = userService.userName;
                blogService.blogsNuevos[objIndex].fechaActualizacion = new Date();
                blogService.blogsNuevos[objIndex].flgEliminado = true;

                // Tomo el objeto modificado para asignarselo a una variable.
                var _obj = blogService.blogsNuevos[objIndex];

                // Llamar el servicio como filtro $filter.
                window.alert("Has eliminado el mensaje: " + $filter("inputIdToText")(_obj.idComentario));

                // Redirecciono a la pantalla principal.
                $location.path("/").search({});  // Redirecciono al modelo y limpio parámetros.
                $scope.onchangetitle()(title, nombreusuario, isactivo);
            }

            // Cambiar el título.
            $scope.changeTitle = function() {
                title = "Vamos a capturar un nuevo blog.";

                // Aqui asigno el valor de blogs nuevos.
                blogs = blogService.blogsNuevos;

                debugger;
                // Aquí asigno el flag de autenticación y el nombre del usuario (este me falla, no se ven en el template)
                nombreusuario = userService.userName;
                isactivo = userService.flgIsLogged;
                
                $location.path("/blogAdd").search({});  // Redirecciono al modelo y limpio parámetros.
                $scope.onchangetitle()(title, nombreusuario, isactivo);
            }
        },
        controllerAs: "di"
    }

    return directive;
  }   
})(); // Fin de la directiva de Angular JS.