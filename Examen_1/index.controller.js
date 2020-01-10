// Sección de controladores.
(function(){
    // Definición de los controladores.
    angular.module("indexModule").controller("indexController1", indexController1);
    angular.module("indexModule").controller("indexController2", indexController2);

    // Primer Controlador.
    function indexController1($filter, dataService) {
        var vm = this;

        // Módelo del cliente.
        vm.model = {
            lastId : 0,
            totalRows : 0,
            nuevoBlog : [],
            blogObjeto : {       
                idComentario : 0,
                comentarioTxt : "",
                tipoComentario : "",
                nombreProducto : "",
                autorComentario : "",
                fechaAlta : "",
                fechaActualizacion: "",
                flgPrioritario : false,
                flgAlta: true,
                flgEdicion : false,
                flgEliminado : false
            },
            arryNombreProducto : [{ id: 0, name: "PoliciyCheck" }, 
                                  { id: 1, name: "AutoCheck" }, 
                                  { id: 2, name: "PostMaster" }, 
                                  { id: 3, name: "EasyClaim" }],
            arryUsers : [{ id: 0, name: "Iliana Tavera" }, 
                         { id: 1, name: "Sheila Solis" }, 
                         { id: 2, name: "Olimpo Bonilla" }, 
                         { id: 3, name: "Patricia Lara" }]                                 
        };

        // Funciones internas.
        vm.agregarComentario = agregarComentario;
        vm.eliminarComentario = eliminarComentario;
        vm.mostrarComentario = mostrarComentario;
        vm.actualizarComentario = actualizarComentario;
        vm.cancelarOperacion = cancelarOperacion;

        // Constructor.
        initialize();

        // Devolvemos el scope.
        return vm;

        // Constructor del objeto Model.
        function initialize() {
            vm.model.lastId = 0;
            vm.model.nuevoBlog = dataService.blogNuevo;
            vm.model.totalRows = 0;

            vm.model.blogObjeto.idComentario = 0;
            vm.model.blogObjeto.comentarioTxt = "";
            vm.model.blogObjeto.tipoComentario = "Publico";
            vm.model.blogObjeto.nombreProducto = "";
            vm.model.blogObjeto.autorComentario = "";
            vm.model.blogObjeto.fechaAlta = new Date();
            vm.model.blogObjeto.fechaActualizacion = "";
            vm.model.blogObjeto.flgPrioritario = false;
            vm.model.blogObjeto.flgAlta = true;
            vm.model.blogObjeto.flgEdicion = false;
            vm.model.blogObjeto.flgEliminado = false;
        }

        // Agregar un blog.
        function agregarComentario()
        {
            var idPos = 0;
            idPos = vm.model.lastId + 1;

            // Construyo el objeto Comentario.
            var objComentario = {
                idComentario : idPos,
                comentarioTxt : vm.model.blogObjeto.comentarioTxt,
                tipoComentario : vm.model.blogObjeto.tipoComentario,
                nombreProducto : vm.model.blogObjeto.nombreProducto,
                autorComentario : vm.model.blogObjeto.autorComentario,
                flgPrioritario : vm.model.blogObjeto.flgPrioritario,
                fechaAlta : new Date(),
                fechaActualizacion : "",
                flgAlta : true,
                flgEdicion : false,
                flgEliminado : false
            };

            // Guardo el último identificador del comentario.
            vm.model.lastId = idPos;

            // Agrego el nuevo elemento.
            if (dataService.blogNuevo.length < 20)
            {
                dataService.blogNuevo.push(objComentario);
                vm.model.totalRows = dataService.blogNuevo.length;
            }
            else{
                window.alert('Has superado el máximo de 20 comentarios');
            }
            
            // Blanqueo los campos.
            cancelarOperacion();
        }

        // Eliminar un blog existente.
        function eliminarComentario(id) {
            // Obtengo de la lista de los blogs activos el blog con el Id seleccionado.
            var objIndex = dataService.blogNuevo.findIndex(obj => obj.idComentario === id);

            // Asigno valores a los atributos por el indice.
            dataService.blogNuevo[objIndex].fechaActualizacion = new Date();
            dataService.blogNuevo[objIndex].flgEliminado = true;

            // Tomo el objeto modificado para asignarselo a una variable.
            var _obj = dataService.blogNuevo[objIndex];

            // Elimino el objeto seleccionado de la lista de blogs nuevos sobre el indice.
            dataService.blogNuevo.splice(objIndex, 1);

            // Lo inserto a los blogs eliminados.
            dataService.blogEliminado.push(_obj);

            vm.model.totalRows = dataService.blogNuevo.length;

            // Llamar el servicio como filtro $filter.
            window.alert("Has eliminado el mensaje: " + $filter("inputIdToText")(_obj.idComentario));
        }

        // Mostrar un comentario existente.
        function mostrarComentario(id) {
            // Obtengo de la lista de los blogs activos el blog con el Id seleccionado.
            var objIndex = dataService.blogNuevo.findIndex(obj => obj.idComentario === id);

            // Obtengo el objeto.
            var obj = dataService.blogNuevo[objIndex];
            
            // Leo los atributos del blog activo.
            vm.model.blogObjeto.idComentario = obj.idComentario;
            vm.model.blogObjeto.comentarioTxt = obj.comentarioTxt;
            vm.model.blogObjeto.tipoComentario = obj.tipoComentario;
            vm.model.blogObjeto.flgPrioritario = obj.flgPrioritario;
            vm.model.blogObjeto.flgAlta = false; 
            vm.model.blogObjeto.flgEdicion = true;
            vm.model.blogObjeto.flgEliminado = false;

            // Carga de los combos.
            vm.model.blogObjeto.nombreProducto = obj.nombreProducto;
            vm.model.blogObjeto.autorComentario = obj.autorComentario;
        }

        // Actualizar comentario.
        function actualizarComentario(id) {
            // Obtengo el indice de la lista de los blogs activos el blog con el Id seleccionado.
            var objIndex = dataService.blogNuevo.findIndex(obj => obj.idComentario === id);

            // Actualizo los atributos del blog activo por el indice.
            dataService.blogNuevo[objIndex].comentarioTxt = vm.model.blogObjeto.comentarioTxt;
            dataService.blogNuevo[objIndex].tipoComentario = vm.model.blogObjeto.tipoComentario;
            dataService.blogNuevo[objIndex].nombreProducto = vm.model.blogObjeto.nombreProducto;
            dataService.blogNuevo[objIndex].autorComentario = vm.model.blogObjeto.autorComentario;
            dataService.blogNuevo[objIndex].flgPrioritario = vm.model.blogObjeto.flgPrioritario;
            dataService.blogNuevo[objIndex].fechaActualizacion = new Date();
            dataService.blogNuevo[objIndex].flgEdicion = false;
            
            // Blanqueo los campos.
            cancelarOperacion();
        }

        // Cancelar operación.
        function cancelarOperacion() {
            vm.model.blogObjeto.comentarioTxt = ""; vm.model.blogObjeto.tipoComentario = "Publico"; vm.model.blogObjeto.nombreProducto = ""; vm.model.blogObjeto.fechaAlta = new Date();
            vm.model.blogObjeto.fechaActualizacion = ''; vm.model.blogObjeto.autorComentario = ""; vm.model.blogObjeto.flgAlta = true; vm.model.blogObjeto.flgEdicion = false; vm.model.blogObjeto.flgPrioritario = false;
        }
    }

    // Segundo Controlador.   
    function indexController2(dataService) {   
        var vm = this;

        // Módelo del cliente.
        vm.model = {
            eliminadoBlog : []
        };

        // Constructor.
        initialize();
       
        // Funciones internas.
        vm.restaurarComentario = restaurarComentario;

        // Devolvemos el scope.
        return vm;

        // Constructor del objeto Model.
        function initialize() {
            vm.model.eliminadoBlog = dataService.blogEliminado;
        }
        
        // Reataurar comentario.
        function restaurarComentario(id) {
            // Obtengo el indice de la lista de los blogs eliminados el blog con el Id seleccionado.
            var objIndex = dataService.blogEliminado.findIndex(obj => obj.idComentario === id);

            // Actualizo los atributos del blog activo por el indice.
            dataService.blogEliminado[objIndex].FechaActualizacion = new Date();
            dataService.blogEliminado[objIndex].FlgEliminado = false;

            // Tomo el objeto modificado para asignarselo a una variable.
            var _obj = dataService.blogEliminado[objIndex];
        
            // Elimino el objeto seleccionado de la lista de blogs eliminados sobre el indice.
            dataService.blogEliminado.splice(objIndex, 1);
    
            // Lo inserto a los blogs nuevos.
            dataService.blogNuevo.push(_obj);
        }
    }
})();