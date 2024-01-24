// Comentario 
// CLASE 1: VARIABLES
// Para inicializar una variable, hay que declararla primero usando let, const o var y el nombre de la variable. 
// Despues, se le asigna el valor (ya sea int, str o boolean)

let personas = 5;
const persona = 'Nehuel';

// Las declaraciones con const y let tiene controles adicionales para las variables
// Por ejemplo, impiden que se creen dos variables con el mismo nombre
// Una variable let permite que se le reasigne el valor durante el transcurso de de la aplicacion. 
// Una constante const recibe una unica asignacion al momento de su declaracion, impidiendo que se pueda modificar despues 
// NOTA: Segun ChatGPT, var se utiliza menos a favor de let y const. 

let edad = 5;
edad = 34;

const apellido = "Marcos";

// INTEGERS: Se pueden realizar operaciones matematicas con variables numericas

let numeroA = 5;
let numeroB = 2;
const NUMEROC = 4;

let resultadoSuma = numeroA + numeroB;
let resultadoResta = numeroA - numeroB;
let resultadoMultiplicacion = numeroA * NUMEROC;

// STRINGS: Se pueden concatenar las variables de caracteres

let textoA = 'BUENOS';
let textoB = "DIAS";
const BLANCO = " ";

let resultadoA = textoA + textoB;
let resultadoB = textoA + 1;
let resultadoC = textoA + BLANCO + textoB;

// SENTENCIAS prompt, consola, alert

// La sentencia prompt() mostrara un cuadro de dialogo para que el usuario ingrese un dato
// Se puede proporcionar un mensaje que se colocara sobre el campo de texto
// El valor que devuelve es una cadena que representa lo que el usuario ingresa
// Equivale al input() de Python

let nombreIngresados = prompt("Ingrese su nombre: ");

// En la pantalla del navegador, el usuario vera una ventana sobre la web que le solicitara un dato.
// Al valor que el usuario ingresa se lo conoce como "termino de entrada"

// La sentencia console.log() muestra el mensaje que pasemos como parametro a la llamada en la consola del navegador web
// Equivale al print() de Python

console.log(resultadoA);
console.log("Mensaje de prueba");

// Para visualizar esto checkear el debug console de VS o la consola de la pagina web (click derecho --> Inspeccionar --> Consola)

// La sentencia alert() mostrara una ventana sobre la pagina web que estemos accediendo, mostrando el mensaje que se pase como parametro de llamada

alert("Hola Ser Intergalactico!")

// En la pantalla del navegador, el usuario vera una ventana sobre la web que le muestra un mensaje.
// Al valor que le mostramos al usuario como un resultado se lo conoce como "termino de salida"

