// CLASE 8: HIGH ORDER FUNCTIONS (Parte 2)

// OBJETOS DE JAVASCRIPT
// Equivalente a lo que en Python se conocen como Librerias
// Javascript provee varios objetos que funcionan como un contenedor de herramientas y metodos para realizar distintas tareas/operaciones
// A diferencia de Python, estos objetos integrados no requieren su importacion al programa

// OBJETO MATH
// El objeto Math ofrece metodos y herramientas para realizar operaciones matematicas

// PROPIEDADES
// Se pueden acceder a algunas constantes matematicas a traves del objeto Math, como el numero PI o la constante de Euler

console.log(Math.E)
console.log(Math.PI)

// METODOS

// 1) MIN & MAX 
// Los metodos Math.MIN() y Math.MAX() reciben una serie de argumentos numericos y devuelven aquel de valor MAXIMO o MINIMO, segun corresponda

console.log(Math.max(55, 13, 0, -25, 93, 4)) // 93
console.log(Math.min(55, 13, 0, -25, 93, 4)) // -25

// Tambien se pueden referenciar los valores de infinito positivo o negativo a traves de la variable global INFINITY de tipo number:

console.log(Math.max(55, Infinity, 0, -25, 93, 4)) // Infinity
console.log(Math.min(55, 13, 0, -Infinity, 93, 4)) // -Infinity

// 2) CEIL, FLOOR & ROUND 
// Estos metodos sirven para redondear un valor numerico a un numero entero cercano

const pi = Math.PI // 3.141592653589793

// El metodo CEIL() devuelve el entero mayor o igual mas proximo 
console.log(Math.ceil(pi)) // 4

// El metodo FLOOR() devuelve el entero mas cercano redondeado hacia abajo
console.log(Math.floor(pi)) // 3

// El metodo ROUND() devuelve el valor de un numero redondeado al entero mas cercano
console.log(Math.round(pi)) // 3

// 3) SQUARE ROOT 
// El metodo Math.SQRT() retorna la raiz cuadrada de un numero
// Si se le envia un numero negativo, el metodo retorna NaN

console.log(Math.sqrt(9)) // 3
console.log(Math.sqrt(2)) // 1.4142135623730951
console.log(Math.sqrt(1)) // 1
console.log(Math.sqrt(-1)) // NaN

// 4) RANDOM
// El metodos Math.RANDOM() genero un numero pseudo-aleatorio entre 0 y 1, siendo 0 el limite inclusivo y 1 el exclusivo

console.log(Math.random()) // 0.5434169434462404
console.log(Math.random()) // 0.009762390766882456
console.log(Math.random()) //0.04356664525037579

// Para generar numeros aleatorios dentro de un rango deseado, distinto de 0-1, se puede multiplicar su resultado por el rango esperado.
// A la vez, se puede sumar el limite inferio si se necesita hacerlo

// EJEMPLOS:
// Numeros entre 0 y 10
console.log(Math.random() * 10)

// Numeros entre 0 y 50
console.log(Math.random() * 50)

// Numeros entre 20 y 50
console.log(Math.random() * 30 + 20)

// En el ultimo ejemplo se quiere generar numeros entre 20 y 50.
// Por eso, el rango es de 30 a partir del numero 20 (Limite inferior adicionado)
// Pero todos los numeros siguen conteniendo una larga serie de decimales
// Es por eso que se suele combinar con las funciones de redondeo para obtener numeros enteros aleatoriamente

const generarNumero = () => {
    return Math.round(Math.random() * 100)
}
console.log(generarNumero())

// Al usar round(), esta funcion retorna numeros aleatorios entre 0-100 inclusive.
// Si se utilizara ceil() el rango seria entre 1-100
// Si se utilizara floor() el rango seria entre 0-99

// CLASE DATE
// La clase DATE se utiliza para acceder a fechas, horarios, etc

// Instanciar un objeto Date nos genera la fecha y tiempo actual

console.log(Date()) // Thu Jan 18 2024 21:00:25 GMT-0300 (Argentina Standard Time)

// El constructor de la clase Date nos permite crear objetos date con fechas diferentes
// Puede recibir parametros en el orden año, mes, dia, hora, minutos, segundos, milisegundos (todos tipo number)
// La convencion con la que trabaja JavaScript para construir fechas cuenta los meses a partir del 0 (0 = enero, 11 = diciembre) y los dias a partir del 1

console.log(new Date(2020, 1, 15)) // 2020-02-15T03:00:00.000Z

const casiNavidad = new Date(2021, 11, 25, 23, 59, 59)
console.log(casiNavidad) // 2021-12-26T02:59:59.000Z

// Tambien se puede usar strings para crear fechas con el constructor

const otraNavidad = new Date("December 25, 2021, 23:59:59")
console.log(otraNavidad) // 2021-12-26T02:59:59.000Z

// VALOR SINGULAR DE UNA FECHA
// Instanciando un objeto Date, podemos aplicar distintos metodos que nos devuelven determinador valores de la misma

// El metodo GETMONTH() devuelve el numero que representa el mes (entre 0 y 11)
console.log(otraNavidad.getMonth())

// El metodo GETFULLYEAR() devuelve el numero que representa el año creado
console.log(otraNavidad.getFullYear())

// El metodo GETDAY() devuelve el numero que representa el dia creado (1 = Lunes, 7 = Domingo)
console.log(otraNavidad.getDay())

// PUNTOS IMPORTANTES
// Los resultados de las diferencias entre fechas se generan en MILISEGUNDOS
// Si se quiere calcular la diferencia de dias entre dos fechas habria que generar calculos adicionales sobre esta diferencia en milisegundos
// Es por eso que existen librerias que solucionan estos problemas de forma eficiente y rapida (Se va a ver en clases posteriores)

// Ejemplos de diferencias entre fechas: 
const navidad = new Date("December 25, 2021")
const hoy = new Date("December 17, 2021")

console.log(navidad - hoy) // 691200000
const milisegundosPorDia = 86400000
console.log((navidad - hoy) / milisegundosPorDia) // 8


