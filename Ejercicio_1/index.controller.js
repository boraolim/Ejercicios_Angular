(function(){
    angular.module("indexModule").controller("indexController", indexController);

    function indexController(){
        var vm = this;

        // Modelo del cliente.
        vm.model={
            name: "",
            age: 0,
            products: [],
            total: 0.00
        }

        // Modelo del producto.
        vm.product = {
            NombreProducto: "",
            Cantidad: 0,
            Precio: 0.00,
            FlgEsReloj: true
        }

        // Funciones internas.
        vm.agregarProducto = agregarProducto;
        vm.eliminarProducto = eliminarProducto;
        vm.posponerProducto = posponerProducto;

        initialize();

        return vm;

        function initialize() {
            vm.model.name = "";
            vm.model.age = 0;
            vm.model.products = [];
            vm.model.total = 0;
        }

        function agregarProducto() {
            var obj = {
                NombreProducto: vm.product.NombreProducto,
                Cantidad: vm.product.Cantidad,
                Precio: vm.product.Precio,
                FlgEsReloj: vm.product.FlgEsReloj,
            };

            // Inicio la suma total de la factura y agrego al array el elemento producto a la lista.
            vm.model.total = vm.model.total + (vm.product.Precio * vm.product.Cantidad);
            vm.model.products.push(obj);

            // Blanqueo las propiedades, para que al hacer bind se queden los campos en blanco, despues de capturar el dato.
            vm.product.NombreProducto = ''; vm.product.Cantidad = ''; vm.product.Precio = '';
        }

        function eliminarProducto(id) {
            // Resto el total de la cantidad
            vm.model.total = vm.model.total - (vm.model.products[id].Precio * vm.model.products[id].Cantidad);

            // Elimino entonces el elemento del array con el id seleccionado.
            vm.model.products.splice(id, 1);
        }

        function posponerProducto(id) {
            // Resto el total de la cantidad.
            vm.model.total = vm.model.total - (vm.model.products[id].Precio * vm.model.products[id].Cantidad);

            // Asigno el flag a false para ocultarlo en la pantalla con el id seleccionado.
            vm.model.products[id].FlgEsReloj = false;
        }
    }
})();