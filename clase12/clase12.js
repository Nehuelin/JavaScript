// CLASE 12: OPERADORES AVANZADOS (Parte 1)

// SUGAR SYNTAX
// Es el nombre que se le da a los operadores avanzados que funcionan como simplificadores de tareas mas complejas
// El operador ++ es un ejemplo de esto

// OPERADOR ++
// Aumenta la variable en 1

let num = 10

num = num + 1 // Aumentar el valor en 1
num += 1 // Primera simplificacion 
num++ // Sugar syntax

// OPERADOR TERNARIO (? & :)
// Es una simplificacion de la estructura condicional if ... else
// Es un condicional que consta obligatoriamente de tres partes
let condicion; // --> La condicion
let caso1; // --> Caso de ejecucion verdadera
let caso2; // --> Caso else

// SINTAXIS:
condicion ? caso1 : caso2

// La condicion devuelve true o false
// En caso1 se escribe la instruccion a ejecutar si la condicion es verdadera, y en caso2 si es falsa

// EJEMPLO
let temperatura = 40
temperatura > 30 ? alert("Dia Caluroso!") : alert("Dia agradable")

// El operador ternario ofrece un return implicito para cada caso
// Esto es muy util cuando se quiere retornar valores de forma condicional, lo cual con una estructura tradicional seria mas extenso
// EJEMPLO

const usuario = {
    nombre: "John Doe",
    edad: 22
}

// ESTRUCTURA TRADICIONAL
let permiso;
if (usuario.edad >= 18) {
    permiso = true;
} else {
    permiso = false;
};
if (permiso) {
    alert("Puede comprar cerveza");
} else {
    alert("No puede comprar");
};

// OPERADOR TERNARIO
const permiso2 = (usuario.edad >= 18) ? true : false
permiso ? alert("Puede comprar cerveza") : alert("No puede comprar")

// OPERADOR LOGICO AND (&&)
// Es una reduccion de un condicional, pero trata de ejecutar (o retornar) algo solo si la condicion es verdadera, reduce un if sencillo con un solo bloque de ejecucion
// EJEMPLO

const carrito = []

// ESTRUCTURA TRADICIONAL
if (carrito.length === 0) {
    console.log("El carrito esta vacio")
}

// OPERADOR AND
carrito.length === 0 && console.log("El carrito esta vacio")

// En el caso de que la condicion resulte falsa, el operador AND retornara false en cambio

usuario.edad = 14

const registroIngreso = usuario.edad >= 18 && new Date()

console.log(registroIngreso) // FALSE

// OPERADOR LOGICO OR (||) (alt 124)
// OR es sintacticamente similar al anterior, con la diferencia que consta de dos operandos y no de una condicion explicita:
let operando1;
let operando2;

// SINTAXIS
operando1 || operando2

// Si no es FALSY (false, 0, null, undefined, NaN, empty string), el operador OR retorna operador1, de lo contrario retorna operador2

// TABLA DE EVALUACION DE VALORES FALSY
console.log(0 || "Falsy")
console.log(40 || "Falsy")
console.log(null || "Falsy")
console.log(undefined || "Falsy")
console.log("Hola Mundo" || "Falsy")
console.log("" || "Falsy")
console.log(NaN || "Falsy")
console.log(true || "Falsy")
console.log(false || "Falsy")

// El operador OR es versatil para condicionar asignaciones de variables o de parametros sencillamente

const usuario2 = null

console.log(usuario || "Este usuario no existe")
console.log(usuario2 || "Este usuario no existe")

// Tambien es util para inicializar variables de forma condicionada evaluando algun valor previo
// EJEMPLO 
let carrito2;
let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"))

// ESTRUCTURA TRADICIONAL
if (carritoLocalStorage) {
    carrito2 = carritoLocalStorage;
} else {
    carrito2 = []
}

// OPERADOR OR
const carrito3 = JSON.parse(localStorage.getItem('carrito')) || []

// OPERADOR NULLISH COALESCING (??)
// Este operador funciona igual que el OR, con la diferencia de que admite mas valores como verdaderos
// En este caso, solo obtendremos nullish en dos casos

console.log(0 ?? "Falsy") // 0
console.log(40 ?? "Falsy") // 40
console.log(null ?? "Falsy") // NULLISH
console.log(undefined ?? "Falsy") // NULLISH
console.log("Hola Mundo" ?? "Falsy") // Hola Mundo
console.log("" ?? "Falsy") // ""
console.log(NaN ?? "Falsy") // NaN
console.log(true ?? "Falsy") // true
console.log(false ?? "Falsy") // false

// ACCESO CONDICIONAL A UN OBJETO (?)
// Si se intenta acceder a un objeto que no existe naturalmente se obtiene un error
// Pero si se usa el operador ? sobre la referencia de un obketo para condicionar su acceso podemos obtener un mejor control de errores en la ejecucion

const usuario3 = null
console.log(usuario3.nombre || "El usuario no existe") // --> Uncaught TypeError: Cannot read properties of null (reading 'nombre')
console.log(usuario3?.nombre || "El usuario no existe") // --> El usuario no existe

// Tambien puede aplicarse sobre propiedades que sean objetos para evaluar su existencia/validez y controlar los flujos del programa

const usuario4 = {
    nombre: "John Doe",
    edad: 22,
    cursos: {
        javascript: "aprobado"
    }
}

console.log(usuario4?.cursos?.javascript || "La propiedad no existe") // Aprobado
console.log(usuario4?.cursos?.python || "La propiedad no existe") // La propiedad no existe

// DESESTRUCTURACION
// Muchas veces se quiere acceder a propiedades de objetos y almacenarlas en variables diferentes para un posterior uso
// Tipicamente se haria algo para lograr eso:

let nombre = usuario.nombre;
let edad = usuario.edad;

// Sin embargo, se puede utilizar la desestructuracion para simplificar y agilizar este proceso
// La desestructuracion es una tecnica que permite declarar variables donde guardar propiedades de un objeto de forma rapida y directa

let {prop1, prop2} = objeto

// Es decir los nombres de las variables deben coincidir exactamente con los nombres de las propiedades que queremos obtener del objeto
// En el ejemplo anterior, se puede desestructurar el objeto de la siguiente forma:

const {nombre2, edad2} = usuario

console.log(nombre2) // "John Doe"
console.log(edad2) // 32

// Cada propiedad que se quiera desestructurar del objeto se las declara separadas por comas
// Si se intenta desestructurar una propiedad inexistente en el objeto, obtendremos undefined

const {telefono} = usuario // undefined 

// Si se quiere acceder a propiedades mas internas dentro de un objeto, es decir, desestructurar alguna propiedad que sea a la vez un objeto, es posible siguiendo el mismo patron

const usuario5 = {
    nombre: "John Doe",
    edad: 32,
    telefono: {
        cel: 11223344,
        casa: null,
        trabajo: 1111222223333
    }
}

// En este caso, como telefono es un objeto, desestructuramos la propiedad trabajo de este, dentro de la desestructuracion de usuario

const {nombre3, telefono: {trabajo}} = usuario

console.log(nombre) // "John Doe"
console.log(trabajo) // 1111222223333

// Notese que finalmente se terminan declarando dos variables, NOMBRE y TRABAJO


// ALIAS 
// Para que la desestructuracion funciones debe haber coincidencia con los nombres de las propiedades del objeto
// Sin embargo a veces puede que los nombres de las propiedades no sean muy descriptivos para el uso que queremos darle, y por ello podemos desestructurarlas con un ALIAS
// El termino ALIAS refiere a la declaracion de una variable con un nombre alternativo tras haber desestructurado el objeto
// Esto se puede hacer simplemente con el operador : luego del nombre de la propiedad

const item = {
    item_id: 432,
    product_name: "Some product",
    price_per_unit: 5600
}

const {
    item_id: id,
    product_name: nombreProducto,
    price_per_unit: precio
} = item

console.log(id) // 432
console.log(nombreProducto) // "Some product"
console.log(precio) // 5600

// En este caso desestructuramos todas las propiedades de item, pero lo almacenamos en variables denominadas id, nombreProducto y precio, a traves del alias que indicamos para cada una

// DESESTRUCTURACION EN PARAMETROS
// Si en una funcion se reciben objetos por parametros, tambien es posible desestructurarlos directamente en el llamado, definiendo esto al declarar la funcion
// EJEMPLO 1: Una funcion que recibe un objeto producto por parametro y debe trabajar con sus propiedades id y nombre

const producto = {
    id: 10,
    nombre: "Curso Javascript",
    precio: 12500
}

const desestructurar = (item) => {
    //desestructurando dentro del bloque
    const {id, nombre} = item
    console.log(id, nombre)
}

desestructurar(producto) // 10 Curso Javascript

// Conociendo que es lo que se va a recibir y que se necesita desestructurar, se puede traducir esto con la siguiente logica:

const desestructurar2 = ({id, nombre}) => { // Desestructuramos lo que reciba por parametro
    console.log(id, nombre)
}

desestructurar2(producto) // 10 Curso Javascript

// EJEMPLO 2: Se capturan las posiciones x, y del objeto evento del click sobre la pantalla, mostrando esas posiciones por consola

window.addEventListener('click', ({x, y}) => {
    console.log(x, y)
})

// Esto es muy util cuando se trabaja con objetos grandes (como el de evento) y solo se necesitan pocas propiedades de este

// DESESTRUCTURACION DE ARRAYS
// Es posible desestructurar arrays de forma similar, usando corchetes [] en vez de llaves. La diferencia con la desestructuracion de objetos es que la de arrays es POSICIONAL
// Es decir, se declaran las variables en orden y estas almacenan los valores de las mismas posiciones del array de referencia

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]
const [a, b] = nombres
console.log(a) // "Juan"
console.log(b) // "Julieta"

// A diferencia de la desestructuracion por parametros, aqui se toman los valores segun la POSICION
// Si se quieren omitir posiciones, se puede hacer dejando espacios vacios con comas:

const [,, c, d] = nombres 
console.log(c) // Carlos
console.log(d) // Mariela

