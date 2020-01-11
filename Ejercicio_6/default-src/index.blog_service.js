// Archivo: index.blog_service.js
// Objetivo: Servicio tipo Factory de Angular para la gestión de blogs.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-11.
// Comentarios: N/A

(function () {

  // Definición del constructor del objeto tipo 'Factory'.
  angular.module("indexModule").factory("blogService", blogService);

  // Función 'blogService'.
  function blogService() {       
      var service = this;

      // Arreglo de blogs nuevos.
      service.blogsNuevos = [];

      // Arreglo de blogs eliminados.
      service.blogsEliminados = [];

      // Arreglo de tipos de productos.
      service.tipoProductos = [{ id: 0, name: "PoliciyCheck" }, 
                               { id: 1, name: "AutoCheck" }, 
                               { id: 2, name: "PostMaster" }, 
                               { id: 3, name: "EasyClaim" }];

      // Funciones internas.
      service.getBlogsActivos = getBlogsActivos;
      service.getBlogsEliminados = getBlogsEliminados;
      service.getTiposProductos = getTiposProductos;
    
      // Devolvemos el scope.
      return service;

      // Función que muestra los blogs activos.
      function getBlogsActivos() {
        return service.blogsNuevos;
      }

      // Función que muestra los blogs eliminados.
      function getBlogsEliminados() {
        return service.blogsEliminados;
      }
      
      // Función que devuelve los tipos de productos.
      function getTiposProductos() {
        return service.tipoProductos;
      }
  }
})(); // Fin del servicio.