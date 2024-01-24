// CLASE 6: ARRAYS (LISTAS)

// Un array es un tipo de dato que sirve para almacenar valores en forma de lista. 
// Esos valores pueden ser distintos y es posible agregar/quitar elementos en todo momento
// Tiene indice de base 0
// Se declara usando corchetes ([]) y dentro de ellos se definen los valores, separados por coma

const arrayA = []; // Vacio
const arrayB = [1, 2]; // Integers
const arrayC = ["C1", "C2", 'C3']; // Strings
const arrayD = [true, false, true, false]; // Booleans
const arrayE = [1, false, "C4"]; // Mix

// Para acceder a un elemento de un array se debe poner su posicion (base 0)(Igual que en Python)

const numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // 1
console.log(numeros[3]); // 4
let resultado = numeros[1] + numeros[2];
console.log(resultado); // 5

// En JavaScript, los arrays son ITERABLES, por ende se los puede recorrer usando bucles

for (let index = 0; index < 5; index++) {
    console.log(numeros[index]);
}

// METODOS DE ARRAYS
// Al igual que en un string, LENGTH sirve para obtener el largo de un array (igual que en Python)

const miArray = ["marca", 3, "palabra"];
console.log (miArray.length); // 3

// Es comun utilizarlo para definir el limite de una iteracion sobre un array

const masNumeros = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < masNumeros.length; i++) {
    console.log(masNumeros[i]);
}

// Para sumar un elemento a un array ya existente, se utiliza el metodo PUSH(), pasando como parametro el valor (o variable) a agregar

const miArray2 = ["marca", 3, "palabra"];
miArray2.push('otro elemento');
console.log(miArray2.length); // 4
console.log(miArray2) ;

// El metodo PUSH() agrega elementos al final del array. 
// Si queremos agregar al inicio del array, utilizamos el metodo UNSHIFT() de forma similar

const miArray3 = ["marca", 3, "palabra"];
miArray3.unshift('otro elemento');
console.log(miArray3);

// De forma inversa, existen metodos para eliminar elementos del array
// SHIFT() --> elimina el primer elemento del array
// POP() --> elimina el ultimo elemento del array

const nombres = ["Luis", "Ana", "Julia", "Juan"];

nombres.pop();
console.log(nombres);

nombres.shift();
console.log(nombres);

// El metodo SPLICE() permite eliminar uno o varios elementos de un array en cualquier posicion
// Funciona con dos parametros:
// El primero es el indice donde se ubica el metodo para trabajar y el segundo es la cantidad de elementos a eliminar desde esa posicion

const masNombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
masNombres.splice(1, 2);
console.log(masNombres);

// El metodo JOIN() genera un string con todos los elementos del array, separados por el valor que pasamos como parametro

console.log(masNombres.join(", "));
console.log(masNombres.join("*"));

// El metodo TOSTRING() funciona igual que el join(), pero los elementos siempre son separados por comas
console.log(masNombres.toString())

// El metodo CONCAT() permite combinar dos arrays en un unico Array resultante

const perros = ["Pupy", "Ronnie"];
const gatos = ["Mishi", "Garfield", "Zuri"];
const mascotas = perros.concat(gatos);
console.log(mascotas);

// El metodo SLICE() devuelve una copia de una parte del array dentro de un nuevo Array, empezando por el inicio hasta fin (no incluido)
// El array original no se modificara 

masNombres.unshift("Pedro", "Miguel");
const masculinos = masNombres.slice(1, 3);
console.log(masculinos);

// El metodo INDEXOF() nos permite obtener el indice de un elemento en un array
// Recibe como parametro el elemento que queremos buscar en el array
// Si existe, nos retorna su indice, de lo contrario retornara como valor -1

console.log(masNombres.indexOf('Rita'));
console.log(masNombres.indexOf('Ana'));
console.log(masNombres.indexOf('Julieta'));

// El metodo INCLUDES() devuleve un valor booleano (true/false) si el elemento que recibe como parametro esta dentro de un array o no

console.log(masNombres.includes('Rita'));
console.log(masNombres.includes("Miguel"));
console.log(masNombres.includes("Julieta"));

// El metodo REVERSE() invierte el orden de los elementos de un array

masNombres.reverse();
console.log(masNombres);

// Este metodo es destructivo, es decir que modifica el array original
// Esto tambien sucede con los metodos que agregan/quitan elementos

// ARRAYS DE OBJETOS
// Los arrays pueden usarse para almacenar objetos personalizados. 
// Podemos asignar objetos literales o previamente instanciados en la declaracion del array o agregar nuevos objetos usando push() y el constructor

const objeto1 = { id: 1, producto: "Arroz" };
const array = [objeto1, { id: 2, producto: "Fideo" }];
array.push({ id: 3, producot: "Pan" });
console.log(array);

// La combinacion de arrays con objetos generan estructuras complejas de datos
// Los metodos de arrays y las herramientas para recorrerlos nos permiten acceder y manipular todos estos datos de forma precisa y prolija

// FOR ... OF
// La sentencia "for ... of" permite recorrer un array ejecutando un bloque de codigo por cada elemento

const productos = [{ id: 1, producto: "Arroz" }, { id: 2, producto: "Fideo" }, { id: 3, producot: "Pan" }];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}


