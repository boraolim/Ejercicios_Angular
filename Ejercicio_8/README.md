<h1>Ejercicio No. 8</h1>

<p><strong>Objetivo.</strong> Este peque&ntilde;o reto consiste en utilizar los siguientes conceptos de Angular:</p>
<ul>
  <li>Routing.</li>
  <li>Paso de par&aacute;metros a controladores.</li>
</ul>

<h3>Requerimiento</h3>
<p>Implementar en AngularJS un sistema que permita el manejo y seguimiento de los comentarios agregados por los usuarios de una plataforma de e-commerce.</p>
<ol>
  <li>El usuario deber&aacute; poder seleccionar su cuenta de usuario entre varias cuentas (Administrador, Usuario 1, Usuario 2, Invitado). La implementaci&oacute;n de este punto esta abierto a lo que ustedes deseen en terminos de funcionalidad y apariencia.</li>
  <li>El usuario deber&aacute; poder capturar los siguientes datos:
    <ul>
      <li>Comentario - Textbox.</li>
      <li>Tipo de comentario (P&uacute;blico o Privado) - Radio button</li>
      <li>Nombre del producto hacia donde va dirigido el comentarion (PolicyCheck, AutoCheck, PostMaster, EasyClaim) - Combobox</li>
    </ul>
  </li>
  <li>El usuario deber&aacute; poder editar los comentarios pertenecientes a el mismo y s&oacute;lo los de su cuenta de usuario. Para esto, ser&aacute; necesario cargar los datos del comentario ya existentes en los controles que son utilizados para crear el comentario, despu&eacute;s podr&oacute; guardar los cambios.</li>
  <li>Cada comentario tendr&aacute; una fecha de Ultima modificaci&oacute;n de s&oacute;lo lectura. Al agregar o editar un comentario esta fecha debe de ser actualizada autom&aacute;ticamente y mostrarse en el formato: "dd/mm hh:mm".</li>
  <li>Cada comentario deber&aacute; tener un identificador de s&oacute;lo lectura. El identificador ser&aacute; un d&iacute;gito num&eacute;rico con m&aacute;scara siguiendo la siguiente l&oacute;gica:
    <ul>
      <li>Comentarios del 1 al 5 deberan mostrarse como: A-001, A-002, etc.</li>
      <li>Comentarios del 6 al 10 deberan mostrarse como: B-006, B-007, etc.</li>
      <li>Comentarios del 11 al 20 deberan mostrarse como: Z-011, Z-012, etc.</li>
    </ul>
    Se permitir&aacute;n agregar como m&aacute;ximo 20 comentarios.
  </li>
  <li>Cada comentario tendr&aacute; el nombre de la cuenta del usuario que lo cre&oacute;.</li>
  <li>Cada comentario podr&oacute; ser:
    <ul>
      <li>Marcado como prioritario: Toda la fila deber&aacute; cambiar a color amarillo tenue y con texto negritas. Los comentarios priorizados deben de aparecer siempre en la parte de arriba de la tabla.</li>
      <li>Eliminado: El comentario deber&aacute; ocultarse de la tabla.</li>
    </ul>
  </li>
  <li>Existira una segunda tabla que muestre los comentarios eliminados y permita restaurarlos. Cuando un comentario sea restaurado volvera a la primera tabla.</li>
  <li>Cada vez que se elimine un comentario , deber&aacute; aparecer un mensaje (Alert en JavaScript) que indique: <i>"Ha eliminado el mensaje:" + El identificador del mensaje.</i> Ejemplo: Ha eliminado el mensaje B-002.</li>
</ol>

<h3>Requerimientos no funcionales.</h3>
<ol>
  <li>Cada tabla (Comentarios Activos y Comentarios inactivos) deberan manejar controladores distintos.</li>
  <li>Como tendremos 2 controladores, ambos deben de compartir el MISMO modelo.</li>
  <li>Hacer uso de BrowserSync.</li>
</ol>

<p>Fuentes: <a href="https://uniwebsidad.com/libros/bootstrap-3/capitulo-5/formularios-horizontales">Formularios horizontales de Bootstrap,</a>
            <a href="https://www.w3schools.com/colors/colors_picker.asp">Colores CSS3</a> y <a href="https://getbootstrap.com/docs/3.4/components/">Componentes de Bootstrap.</a></p>