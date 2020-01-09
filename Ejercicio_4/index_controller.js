// Controlador asociado al módulo.
(function() {

    // Y si lo defino asi..
    angular.module('indexModule').controller('indexController', indexController);
    

    // Función del controlador.
    function indexController()
    {
        // PATRON DE DISEÑO MODULO.
        var vm = this;

        // Modelo (definición del modeo y sus propiedades.)
        vm.model = {
            name: "",
            age: 0,
            isExternalStudent: false,
            monthlyPayment: 1000,
            dateAdd : "2019-05-26"
        };

        // Asignación del método.
        vm.showName = showName;
        
        // initialize();
        return vm;

        // Constructor.
        /*
        function initialize() {

        }
        */

        // Método publico.
        function showName(){
            alert(vm.model.name);
        }

        // Metodo privado.
        function privateFunction() {

        }

        /*
        function showName(name){
          alert(name);
        }
        */

    }
})();