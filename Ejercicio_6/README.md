# Ejercicios_Angular

Objetivo:
 
Implementar en AngularJS un sistema que permita el manejo y seguimiento de los comentarios agregados por los usuarios de una plataforma de e-commerce
 
 
Requerimientos:
0.-El usuario debera poder seleccionar su cuenta de usuario entre varias cuentas (Administrador, Usuario 1, Usuario 2, Invitado).
La implementacion de este punto esta abierto a lo que ustedes deseen en terminos de funcionalidad y apariencia.
 
1.- El usuario debera poder capturar los siguientes datos:
a) Comentario - Textbox
b) Tipo de comentario (Publico o Privado) - Radio button
c) Nombre del producto hacia donde va dirigido el comentarion (PolicyCheck, AutoCheck, PostMaster, EasyClaim) - Combobox
 
2.- El usuario debera poder editar los comentarios pertenecientes a el mismo y solo los de su cuenta de usuario. Para esto, sera necesario cargar los datos del comentario ya existentes en los controles que son utilizados para crear el comentario, despues podra guardar los cambios 
 
3.- Cada comentario tendra una fecha de Ultima modificación de solo lectura.
Al agregar o editar un comentario esta fecha debe de ser actualizada automaticamente y mostrarse en el formato: dd/mm hh:mm
 
4.- Cada comentario debera tener un identificador de solo lectura. El identificador sera un digito numerico con mascara siguiendo la siguiente logica:

A) Comentarios del 1 al 5 deberan mostrarse como: A-001, A-002, etc
b) Comentarios del 6 al 10 deberan mostrarse como: B-006, B-007, etc
C) Comentarios del 11 al 20 deberan mostrarse como: Z-011, Z-012, etc
 
Se permitiran agregar como maximo 20 comentarios
 
5.- Cada comentario tendra el nombre de la cuenta del usuario que lo creo
 
6.- Cada comentario podra ser:
 
a) Marcado como prioritario: Toda la fila debera cambiar a color amarillo tenue y con texto negritas. Los comentarios priorizados deben de aparecer siempre en la parte de arriba de la tabla
b) Eliminado: El comentario debera ocultarse de la tabla.
 
7.- Existira una segunda tabla que muestre los comentarios eliminados y permita restaurarlos. Cuando un comentario sea restaurado volvera a la primera tabla 
 
8.- Cada vez que se elimine un comentario , debera aparecer un mensaje (Alert en JavaScript) que indique:
 
"Ha eliminado el mensaje:" + El identificador del mensaje 
 
Ejemplo: Ha eliminado el mensaje B-002
 
 
****************
Requerimientos no funcionales:
 
1.- Cada tabla (Comentarios Activos y Comentarios inactivos) deberan manejar controladores distintos
2.- Como tendremos 2 controladores, ambos deben de compartir el MISMO modelo.
3.- Hacer uso de BrowserSync
-->

Instalar por npm:

* npm i gulp --global --save-dev --force
* npm i gulp-cli --global --force 
* npm i browser-sync --global --save-dev
* npm i gulp-sass --global --save-dev