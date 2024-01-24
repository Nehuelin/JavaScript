// CLASE 4: FUNCIONES

// Las funciones se declaran a traves de la palabra reservada "function"
// El nombre de la funcion debe estar en minusculas, sin espacios, y debe ser seguido de parentesis (Similar a Python)

function saludar() {
    console.log("Saludos, terricola");
}

// Para ejecutar la funcion basta con poner el nombre de la misma y los parentesis

saludar();

// Las funciones simples (como la anterior) no requieren de parametros para su funcion
// En cambio, las funciones complejas necesitan recibir parametros para cumplir con sus tareas
// Los parametros son variables que se declaran dentro de la funcion

function conParametros(primerParametro, segundoParametro) {
    console.log(primerParametro + " " + segundoParametro);
}

conParametros("Curso", "JS")
conParametros("Buenos", "Dias")


// Las funciones tambien pueden generar valor de retorno (return)

function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero
}

let resultado = sumar(6, 3)
console.log(resultado)

// Las variables "globales" son aquellas a las que se pueden acceder desde cualquier parte del programa
// Las variables que se declaran fuera de funciones son automaticamente variables globales
// En cambio, las variables "locales" son aquellas que se declaran dentro de una funcion
// Intentar acceder o utilizar una variable local fuera de la funcion donde se declaró provocara un error

// Las variables globales y locales pueden tener el mismo nombre (no hay conflicto)

let nombre = "John Doe" // --> Variable Global

function saludar() {
    let nombre = "Juan Coder" // --> Variable Local
    console.log(nombre)
}

console.log(nombre) // Acceder a variable global
saludar() // Acceder a variable local

// FUNCIONES ANONIMAS
// Es una funcion que se define sin nombre y se utiliza para ser pasada como parametro o asignada a una variable
// En el caso que se le asigne a una variable, se la puede llamar usando el nombre de la variable
// Generalmente las funciones anonimas se asignan a variables declaradas como constantes

const suma = function (a, b) {return a + b}
const resta = function (a, b) {return a - b}
console.log(suma(5, 10))
console.log(resta(50, 32))

// FUNCIONES FLECHA
// Variante de la funcion anonima, de sintaxis simplificada.
// La diferencia principal es que en vez de usar la palabra "function", se usa "=>" (flecha)

const multiplicacion = (a, b) => { return a * b };
const division = (a, b) => a / b ; //---> Si es una funcion de una sola linea se puede evitar escribir el cuerpo
console.log(suma(5, 10))
console.log(resta(50, 32))