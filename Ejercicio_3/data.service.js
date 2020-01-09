(function () {

    angular.module("escuelaModule").factory("dataService", dataService);

    function dataService() {
        
        var service = this;
        service.getDBUser = getDBUser;
        service.getDBAge = getDBAge;
        return service;

        // Inyeccion de dependencias.
        function getDBUser(username)
        {
            return username;
        }

        function getDBAge() {
            return 33;
        }

    }

})();