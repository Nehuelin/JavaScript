// CLASE 10: EVENTOS

// En JavaScript los EVENTOS son la manera de controlar las acciones de los usuarios, y definir un comportamiento de la pagina/aplicacion cuando se produzcan.
// Con JavaScript es posible definir que sucede cuando se produce un evento
// Por ejemplo, cuando se realiza clic en un cierto elemento, o se inserta texto en un determinado campo

// JavaScript permite asignar una funcion a cada uno de los eventos. Reciben el nombre de EVENT HANDLERS (manejadores de eventos)
// Asi, ante cada evento, JavaScript asigna y ejecuta la funcion asociada al mismo

// Los eventos suceden constantemente en el navegador
// JavaScript permite escuchar eventos sobre elementos seleccionados
// Cuando escuchamos el evento que esperamos, se ejecuta la funcion que definimos en respuesta
// A esta escucha se la denomina EVENT LISTENER

// COMO DEFINIR EVENTOS EN JAVASCRIPT

// OPCION 1:
// El metodo ADDEVENTLISTENER() permite definir que evento escuchar sobre cualquier elemento deleccionado
// El primer parametro corresponde al nombre del evento y el segundo a la funcion de respuesta

let boton = document.getElementById("botonPrincipal");
boton.addEventListener("click", respuestaClick);
function respuestaClick() {
    console.log("RESPUESTA EVENTO");
};

// OPCION 2:
// Emplear una propiedad del NODO para definir la respuesta al evento
// Las propuedad se identifican con el nombre del evento y el prefijo ON
// Tambien es posible emplear funciones anonimas para definir los manejadores de eventos

boton.onclick = () => {console.log("RESPUESTA 2")};

// OPCION 3:
// Determinar el evento especificando el manejador de evento en el atributo de una etiqueta HTML
// La denominacion del atributo es identica al de la propiedad de la opcion 2 (prefijo on)
// La funcion puede declararse entre la comillas o bien tomarse una referencia existente en el script
// EJEMPLO EN EL ARCHIVO HTML ---> 

// Las opciones 1 y 2 son las mas recomendadas
// Si bien se pueden presentar casos de aplicacion especificos se identifican como formas de definicion de eventos equivalentes
// Por ejemplo, en la opcion 1 el nombre del evento puede venir de una variable al usar la propiedad, y esto no puede hacerse en la 2

// La opcion 3, aunque es de facil implementacion, no es recomendada para proyectos en produccion
// No se considera BUENA PRACTICA declarar funciones y codigo JavaScript dentro del HTML

// EVENTOS MAS COMUNES

// 1) EVENTOS DEL MOUSE
// Se producen por la interaccion del usuario con el mouse

// CLICK:
// Se dispara cuando se hace clic con el botón izquierdo del mouse.

// DBLCLICK:
// Se dispara cuando se hace doble clic con el botón izquierdo del mouse.

// MOUSEDOWN:
// Se dispara cuando se presiona un botón del mouse.

// MOUSEUP:
// Se dispara cuando se libera un botón del mouse.

// MOUSEMOVE:
// Se dispara cuando se mueve el mouse sobre un elemento.

// MOUSEOVER:
// Se dispara cuando el puntero del mouse entra en un elemento.

// MOUSEOUT:
// Se dispara cuando el puntero del mouse sale de un elemento.

// CONTEXTMENU:
// Se dispara cuando se abre el menú contextual (clic derecho).

// WHEEL:
// Se dispara cuando se desplaza la rueda del mouse.

// DRAGSTART:
// Se dispara cuando comienza una operación de arrastre.

// DRAG:
// Se dispara cuando se arrastra un elemento.

// DRAGEND:
// Se dispara cuando se completa una operación de arrastre.

// MOUSEENTER:
// Similar a mouseover, pero no se propaga de hijo a padre cuando se ingresa a un subelemento.

// MOUSELEAVE:
// Similar a mouseout, pero no se propaga de hijo a padre cuando se sale de un subelemento.

// SELECTSTART
// Se dispara cuando se inicia la selección de texto.

// POINTERDOWN:
// Se dispara cuando se presiona un botón del mouse o se toca la pantalla (compatible con dispositivos táctiles).

// POINTERUP:
// Se dispara cuando se libera un botón del mouse o se levanta el dedo de la pantalla (compatible con dispositivos táctiles).

// POINTERMOVE:
// Se dispara cuando el puntero se mueve (compatible con dispositivos táctiles).

// EJEMPLO:

let boton2 = document.getElementById("btnMain");
boton2.onclick = () => {console.log("BOTON PRESIONADO")};
boton2.onmousemove = () => {console.log("MOVIMIENTO DETECTADO")};

// 2) EVENTOS DEL TECLADO
// Se produce por la interaccion del usuario con el teclado

// KEYDOWN:
// Se dispara cuando una tecla del teclado se presiona hacia abajo.

// KEYUP:
// Se dispara cuando se suelta una tecla del teclado.

// kEYPRESS:
// Se dispara cuando se presiona y se libera una tecla del teclado (no se dispara para todas las teclas y depende del carácter).

// CUT:
// Se dispara cuando se realiza un corte en un elemento editable.

// COPY:
// Se dispara cuando se realiza una copia en un elemento editable.

// PASTE:
// Se dispara cuando se pega contenido en un elemento editable.

// COMPOSITIONSTART:
// Se dispara al comenzar la entrada de texto de composición, como la entrada de caracteres en idiomas que utilizan la composición.

// COMPOSITIONUPDATE:
// Se dispara durante la entrada de texto de composición a medida que se actualiza el contenido.

// COMPOSITIONEND:
// Se dispara al finalizar la entrada de texto de composición.

// EJEMPLO:

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // <--- Notese como se puede verificar si se presiona una tecla en particular
      console.log("SE PRESIONO ENTER");
    }
  });



// 3) EVENTO CHANGE:
// Se dispara cuando el valor de un elemento de formulario cambia y se pierde el foco.

// FOCUS:
// Se dispara cuando un elemento recibe el foco.

// BLUR:
// Se dispara cuando un elemento pierde el foco.

// EJEMPLO:

let input1 = document.getElementById("nombre");
let input2 = document.getElementById("edad");
input1.onchange = () => {console.log("valor1")};
input2.onchange = () => {console.log("valor2")};

// 4) INPUT:
// Se dispara cuando el valor de un elemento de entrada (como un campo de texto) cambia.
// Es decir, que la funcion se ejecuta cada vez que se tipea sobre el elemento de entrada

input1.addEventListener('input', () => {console.log(input1.value)}); 

// 5) SUBMIT
// Se dispara cuando un formulario es enviado
// Normalmente se utiliza para validar el formulario antes de ser enviado al servidor o bien para abortar el envio y procesarlo con JavaScript

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log("Formulario Enviado");
}


// El objeto EVENT proporciona informacion contextual de un evento para poder realizar acciones

// Por ejemplo, cuando queremos saber si se presiona una tecla en particual a la hora de escuchar un evento de teclado
// O, ante el evento submit, se requiere prevenir el comportamiento por defecto para operar correctamente

// En todos los navegadores modernos se crea de forma automatica un parametro que se pasa a la funcion manejadora, por lo que no es necesario incluirlo en la llamada
// Este parametro puede o no usarse en el handler, pero siempre estara disponible en la llamada
// VER HTML EJEMPLO -->