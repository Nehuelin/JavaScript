// CLASE 13: OPERADORES AVANZADOS (Parte 2)

// OPERADOR SPREAD
// Spread (...) es una herramienta que permite, como su nombre lo indica, desparramar un array u objeto
// En otras palabras, cambia la forma en la qie presentamos este array u objeto

// SPREAD DE ARRAYS
// Si se pasa un array por parametro a alfuna funcion, esta recibe el array entero como tal

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

console.log(nombres) // ["Juan", "Julieta", "Carlos", "Mariela"]

// Si en cambio enviamos un spread del array, se puede observar lo siguiente:

console.log(...nombres) // Juan Julieta Carlos Mariela

// equivale a:
console.log("Juan", "Julieta", "Carlos", "Mariela")

// Lo que hace el spread (...) al aplicarse sobre un array, es enviar todos sus elementos como paarametros individuales
// Esto es util cuando tenemos datos ordenados dentro de una coleccion pero se trabaja con funciones que no funcionan recibiendo arrays sino una serie de parametros individuales, como pueden ser Math.max() o Math.min()

// EJEMPLO: Se necesita saber cual es el menor o mayor de este array de numeros:

const numeros = [4, 77, 92, 10, 3, -32, 54, 11]

console.log(Math.max(numeros)) // NaN

// Con el operador spread se puede solucionar esto ya que MAth.max() recibira cada elemento del array como un parametro individual:

console.log(Math.max(...numeros)) // 92

// Tambien se pueden hacer spread de un array dentro de otras estructuras que lo admitan
// Esto permite, por ejemplo, replicar el contenido de un array dentro de otra estructura al desparramar su contenido dentro

const nombres1 = ["Juan", "Julieta"]
const nombres2 = ["Carlos", "Mariela"]

// Spread de arrays dentro de otro array
const nombres3 = [...nombres1, ...nombres2]

console.log(nombres) // ["Juan", "Julieta", "Carlos", "Mariela"]

// Spread del array en un objeto
const nombresObj = {
    ...nombres
}

console.log(nombresObj) // { '0': 'Juan', '1': 'Julieta', '2': 'Carlos', '3': 'Mariela' }

// Notese como al hacer el spread de un array dentro de un objeto, cada propiedad toma como nombre el indice de los elementos

// SPREAD DE OBJETOS
// Se puede hacer spread de objetos tambien, pero debe hacerse dentro de una estructura que lo permita, como otro objeto
// Un spread aplicado sobre objeto presentaria cada par de clave-valor separados por comas, y esto en una funcion no seria admisible, pero si puede serlo dentro de otro objeto
// Esto suele ser util cuando se quiere replicar o modificar estructuras de objetos, ya que permite primero listar todas sus propiedades y valores y luego modificar/agregar las que se deseen:

const usuario1 = {
    nombre: "Juan",
    edad: 24,
    curso: "Javascript"
}

const usuario2 = {
    ...usuario1
}

console.log(usuario2) // { nombre: 'Juan', edad: 24, curso: 'Javascript' }

const usuario3 = {
    ...usuario1,
    curso: "ReactJS",
    email: "juan@doe.com"
}

console.log(usuario3) // { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' }

// REST PARAMETERS 
// El operador spread tambien puede utilizarse dentro de la declaracion de una funcion para indicar que se quiere recibir una cantidad inderteminada de parametros

// Supongase que se quiere tener una funcion para sumar cualquier cantidad de numeros que reciba como parametro
// Esto se puede hacer con el operador spread definiendo rest parameters, lo que significa que la funcion va a recibir una cantidad indeterminada de parametros, pero los va a agrupar dentro de un array con el nombre que se defina, y con eso trabajara dentro:

function sumar(...numeros) {
    console.log(numeros)
}

sumar(4, 2) // [ 4, 2 ]
sumar(10, 15, 30, 5) // [ 10, 15, 30, 5 ]

// En este ejemplo el parametros ...numeros se define como un array donde se guardan todos los argumentos enviados que coincidan con esa posicion
// De esta forma se puede escribir funciones que reciban multiples parametros, sin saber con precision cuantos seran, pudiendo trabajarlos luego como un array dentro de la funcion

// Siguiendo el ejemplo anterior, se puede tomar este array "numeros" y retornar la suma de todos los elementos que reciba con un REDUCE

function sumar2(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0)
}

console.log(sumar2(4, 2)) // 6
console.log(sumar2(10, 15, 30, 5)) // 60
console.log(sumar2(100, 300, 50)) // 450