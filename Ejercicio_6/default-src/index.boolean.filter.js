// Filtro de representación de valores booleanos.
(function () {

    angular.module("indexModule").filter("inputboolToText", inputboolToText);

    function inputboolToText() {
        
        return function(input) {

            switch(input)
            {
                case false:
                    return "No";
                default:
                    return "Si";
            }
        }
    }

})();