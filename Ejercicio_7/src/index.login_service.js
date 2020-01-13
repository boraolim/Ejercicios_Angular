// Archivo: index.login_service.js
// Objetivo: Servicio tipo Factory de Angular para la gestión de cuentas de usuario.
// Autor: Olimpo Bonilla Ramírez.
// Fecha: 2020-01-11.
// Comentarios: N/A

(function () {

  // Definición del constructor del objeto tipo 'Factory'.
  angular.module("indexModule").factory("userService", userService);

  /*@ngInject*/
  // Función 'userService'.
  function userService() {       
    var service = this;

    // Flag que indica el status de la cuenta de usuario, si entró al sistema o no.
    service.flgIsLogged = false;

    // Atributo que indica el nombre del usuario activo.
    service.userName = "";

    // Lista de cuentas de usuarios.
    service.arryUsuarios = [{ id: 0, name: "Administrador" }, 
                            { id: 1, name: "Usuario 1" }, 
                            { id: 2, name: "Usuario 2" }, 
                            { id: 3, name: "Invitado" }];

    // Funciones internas.
    service.setIsLogged = setIsLogged;
    service.setUserName = setUserName;
    service.getIsLogged = getIsLogged;
    
    // Devolvemos el scope.
    return service;

    // Asignar el flag de autenticación.
    function setIsLogged(value) {
      service.flgIsLogged = value;
      return service.flgIsLogged;
    }

    // Asignar el nombre de usuario.
    function setUserName(value) {
      service.userName = value;
      return service.userName;      
    }

    // Mostrar el flag de autenticación.
    function getIsLogged() {
      return service.flgIsLogged;
    }
  } 
})(); // Fin del servicio.