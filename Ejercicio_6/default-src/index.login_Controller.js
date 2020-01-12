(function() {
  angular.module("indexModule").controller("loginController", loginController);

  function loginController($location, userService) {
    var vm = this;

    // Modelo del cliente.
    vm.model = {
      isLogged : false,
      userName : "",
      arrayUsers : []
    };

    // Funciones internas.
    vm.loginUser = loginUser;
    vm.logoutUser = logoutUser;
 
    // Constructor.
    initialize();

    // Devolvemos el scope.
    return vm;

    // Constructor del objeto Model.
    function initialize() {
      // Aquí inicializamos los atributos y elementos del modelo.
      vm.model.isLogged = userService.flgIsLogged;
      vm.model.userName = userService.userName;
      vm.model.arrayUsers = userService.arryUsuarios;
    }

    // Ingresar usuario.
    function loginUser() {
      vm.model.isLogged = userService.setIsLogged(true);
      vm.model.userName = userService.setUserName(vm.model.userName);

      // Redirecciono al modelo.
      $location.path("/");
    }

    // Cerrar sesión.
    function logoutUser() {
      vm.model.isLogged = userService.setIsLogged(false);
      vm.model.userName = userService.setUserName("");

      // Redirecciono al modelo.
      $location.path("/");
    }

  }

})();