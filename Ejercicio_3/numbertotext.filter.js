(function () {

    angular.module("escuelaModule").filter("numberToText", numberToText);

    function numberToText() {
        
        return function(input) {

            switch(input)
            {
                case 0:
                    return "Cero";
                    break;
                    
                case 1:
                    return "Uno";
                    break;

                case 2:
                    return "Dos";
                    break;
                            
                case 3:
                    return "Tres";
                    break;
                            
                case 4:
                    return "Cuatro";
                    break;
        
                case 5:
                    return "Cinco";
                    break;                        
            }
        }
    }

})();