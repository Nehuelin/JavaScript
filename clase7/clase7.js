// CLASE 7: HIGH ORDER FUNCTIONS (Parte 1)

// CONTEXTO SOBRE ABSTRACCION
// La abstraccion es el resumen de un grupo complejo de instrucciones bajo una palabra clave (funcion) que sugiere cual es el problema a resolver por la misma
// Las abstracciones ocultan detalles sobre la operacion a resolver y nos permiten "hablar" sobre los problemas en un nivel mas alto (o mayor grado de abstraccion)

// EJEMPLO: Contador mediante iteraciones
let total = 0
for (let i = 1; i <= 10; i++) {
    total += i
}
console.log(total); // 55

// Presentacion resumida en una funcion, que ocupa solo una linea de codigo
console.log(sumarRango(1, 10)); // 66

// El segundo ejemplo es mas corto y facil de interpretar, pero hay que tener mas claro ciertos conceptos para poder aplicarlo efectivamente (funciones, parametros, return, etc)
// Esto permite ahorrar tiempo de desarrollo y claridad de escritura
// Si no entendemos como puede funcionar una funcion de este tipo, es comun que desconfiemos de su versatilidad y caigamos en la declaracion paso a paso de la solucion, como en el primer ejemplo

// Como desarrolladores constantemente estamos creando funciones y abstracciones para pensar en un nivel superior y poder construir soluciones complejas a los problemas que se nos presentan
// En JavaScript hay muchos metodos nativos incorporados que, como abstracciones, nos ofrecen soluciones a problemas recurrentes; sumando a la posibilidad de que nostros podemos declarar las nuestras

// FUNCIONES DE ORDEN SUPERIOR
// Las funciones de orden superior son aquellas que retornan una funcion, o reciben una funcion como parametro
// Este tipo de funciones permiten abstraerse sobre acciones y no solo valores

// En el primer caso, se puede tener una funcion que retorna una funcion, que permite crear funciones con un esquema superior

function mayorQue(numero) {
    return (mayor) => mayor > numero
}

let mayorQueDiez = mayorQue(10);

console.log(mayorQueDiez(12)); // true
console.log(mayorQueDiez(8)); // false

// En este caso, mayorQue(numero) retorna una funcion que compara un valor contra numero y retorna true o false (porque es el resultado de la comparacion)

function asignarOperacion(operacion){
    if (operacion == "sumar") {
        return (a, b) => a + b
    } else if (operacion == "restar") {
        return (a, b) => a - b
    }
}
let suma = asignarOperacion("sumar");
let resta = asignarOperacion("restar");

console.log(suma(4, 6));
console.log(resta(5, 3));

// En este ejemplo, segun el parametro "operacion" se termina asignando un return de funcion u otro a las variables declaradas

// El segundo caso es recibir funciones por parametro, es decir, escribir funcioner que puedan recibir funciones por parametro

function porCadaUno(array, funcion) {
    for (const elemento of array){
        funcion(elemento);
    };
};

// Supongamos que quiero recorrer un array y hacer algo con cada uno de sus elementos

const numeros = [1, 2, 3, 4];

porCadaUno(numeros, console.log);

// Esta funcion recibe un array como primer parametro y una funcion por el segundo.
// Recorre el array y, por cada elemento, hace un llamado a la funcion mencionada enviando dicho elemento por parametro

total = 0;

function acumular(numero) {
    total += numero
};

porCadaUno(numeros, acumular);
console.log(total); // 10

// Se pueden enviar funciones diferentes en distintos llamados y ejecutar distintas acciones sobre los elementos del array, todo con una misma funcion

// Es comun definir la funcion directamente sobre el parametro como una funcion anonima, aprovechando la sintaxis de ARROW FUNCTION (=>)
// Esto permite definir acciones mas dinamicas

const duplicado = []
porCadaUno(numeros, (elemento) =>{
    duplicado.push(elemento * 2);
})
console.log(duplicado) ;

// METODOS DE BUSQUEDA Y TRANSFORMACION (con arrays)

// El metodo FOREACH() es similar al ejemplo porCadaUno anterior. 
// Itera sobre el array y por cada elemento ejecuta la funcion que enviemos por parametro, la cual recibe a su vez el elemento del array que se esta recorriendo

numeros.forEach( (numero) => {
    console.log(numero);
})

// El metodo FIND() recibe una funcion de COMPARACION por parametro
// Captura el elemento que se esta recorriendo y retorna true o false segun la comparacion ejecutada
// El metodo retorna el primer elemento que cumpla con esa condicion

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
]

const resultado = cursos.find((elemento) => elemento.nombre === "ReactJS");
const resultado2 = cursos.find((elemento) => elemento.nombre === "DW");

console.log(resultado); // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2); // undefined

// Notese que find() retorna el primer elemento del array que cumpla con la condicion enviada, de ahi podemos almacenarlo en una variable o usarlo de referencia para otro proceso
// Si no hay ninguna coincidencia en el array, el metodo find retorna undefined

// El metodo FILTER() recibe una funcion comparadora por parametro y retorna un nuevo array con todos los elementos que cumplan esa condicion
// Si no hay coincidencias retornara un array vacio

cursos.push({nombre: 'AngularJS', precio: 22000}, {nombre: "Desarrollo Web", precio: 16000});

const resultado3 = cursos.filter((elemento) => elemento.nombre.includes('JS'));
const resultado4 = cursos.filter((elemento) => elemento.precio <14000);

console.log(resultado3);
console.log(resultado4);

// El metodo SOME() recibe una funcion de busqueda, y devuelve true o false segun el resultado de la iteracion de busqueda

console.log( cursos.some((elemento) => elemento.nombre == "Desarrollo Web")); // true
console.log( cursos.some((elemento) => elemento.nombre == "VueJS")); // false

// El metodo MAP() crea un nuevo array con todos los elementos del original transformados segun las operaciones de la funcion enviada por parametro
// Tiene la misma cantidad de elementos pero los almacenados son el return de la funcion

const nombres = cursos.map((elemento) => elemento.nombre);
console.log(nombres); // [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]

// El metodo map() se utiliza mucho para la transformacion de arrays
// Si se quisiera aumentar el precio de todos los cursos en el ejemplo, se puede mapear y retornar una copia de los elementos con el precio modificado

const actualizado = cursos.map ((elemento) => {
    return {
        nombre: elemento.nombre,
        precio: elemento.precio * 1.25 
    }
});

console.log(actualizado); 


// El metodo REDUCE() nos permite obtener un unico valor tras iterar sobre el array
// Funciona como un metodo que resume el array a un unico valor de retorno

// Ejemplos de aplicacion:
// --> Cuando queremos acumular la suma de alguna propiedad de los elementos
// --> Cuando deseamos obtener algun resultado general sobre todo el array

// A diferencia de los metodos anteriores, el metodo reduce() recibe DOS parametros:
// --> El primero es la funcion que ordena que queremos resumir del array. Recibe un parametro que funciona como acumulador, y el elemento del array que iteramos
// --> El segundo es el valor inicial del acumulador

numeros.push(5, 6)
total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21

// En este ejemplo, en el acumulador sumamos cada elemento del array y al terminar la iteracion nos devuelve ese resultado
// El segundo parametro, 0, es el valor inicial del acumulador

// El metodo SORT() permite reordenar un array bajo un criterio especifico. 
// Recibe una funcion de comparacion por parametro que, a su vez, recibe dos elementos del array
// La funcion retorna un valor numerico (1, -1, 0) que indica que elemento se posiciona antes o despues
// El metodo sort() es destructivo

// Para ordenar numeros, basta con restar uno al otro, y el orden indica si sera ordenado de forma ascendente o descendente

const otrosNumeros = [40, 1, 5, 200];
otrosNumeros.sort((a, b) => a - b); 
console.log(otrosNumeros); // [ 1, 5, 40, 200 ]
otrosNumeros.sort((a, b) => b - a); 
console.log(otrosNumeros); // [ 200, 40, 5, 1 ]

// Para ordenar un array por un string, debemos definir una funcion comparadora que retorne un valor numerico de referencia, segun queramos el orden ascendente o descendente

const items = [
    {nombre: 'Pikachu', precio: 21},
    {nombre: 'Charmander', precio: 37},
    {nombre: 'Pidgey', precio: 45},
    {nombre: 'Squirtle', precio: 60},
]
items.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return 1;
    }
    if (a.nombre < b.nombre) {
        return -1;
    } 
    // a es igual a b
    return 0;
})

console.log(items);


// METODOS DE CADENAS
// El metodo REPLACE() busca una subcadena pasada como parametro dentro de una cadena de caracteres, y la reemplaza con el segundo parametro otorgado

let frase = "Hola, mundo! Soy un ejemplo de replace en JavaScript.";
console.log(frase.replace("JavaScript", "GPT-3"));

// Si se utiliza el modificador global /g, se reemplazaran TODAS las ocurrencias

console.log(frase.replace(/JavaScript/g, "GPT-3"))

// El metodo TRIM() permite quitar los espacios ubicados al principio y al final de la cadena

let cadenaConEspacios = "   Hola, soy una cadena con espacios   ";
console.log(cadenaConEspacios.trim());