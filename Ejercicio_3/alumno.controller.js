(function () {

    angular.module("escuelaModule").controller("alumnoController", alumnoController);

    // Función del controlador.
    function alumnoController(dataService) {
      
        // Patrón de diseño Módulo.
      var vm = this;

      // Modelo.
      vm.model = {
          name : "",
          age : 0,
          isActive : false,
          isForeignStudent : false,
          country : "",
          asignatures : [],
          scores : []
      }

      vm.showName = showName;
      vm.inactivateAlumno = inactivateAlumno;
      
      initialize();
      
      return vm;

      // Constructor...
      function initialize() {
          // No se expone dentro de la interfaz.
          // Solo se inicializa una sola vez.
        vm.model.isActive = true;
        vm.model.isForeignStudent = false;
        vm.model.country = "México";
        vm.model.asignatures = ["Español", "Inglés", "Matemáticas", "Física", "Biología"];
        vm.model.scores = [            
            { asignature : "Español", score: 9 }, 
            { asignature : "Inglés", score: 10 }, 
            { asignature : "Matemáticas", score: 5 }, 
            { asignature : "Física", score: 8 }];
      }

      function showName() {
        alert(dataService.getDBUser("OLIMPO"));
      }

      function inactivateAlumno() {
        vm.model.isActive =! vm.model.isActive;
      }


    }




})();