// CLASE 5: OBJETOS / CLASES

// Un objeto es una coleccion de datos relacionados como una entidad
// Se componen de un listado de pares "clave-valor" (es decir, contienen PROPIEDADES y VALORES)
// La utilidad de los objetos deviene de su composicion por varios valores y operaciones comunes (funciones) para todos los elementos de ese tipo y sus propiedades

let nombre = "Homero";
let edad = 39;
let calle = "Av. Siempreviva 742";

// Como en este ejemplo las variables estan relacionadas entre si, entonces mejor usamos un objeto literal
// Un objeto literal se define directamente entre llaves {}
// Los valores que se almacenan se listan separados por comas, bajo la forma propiedad-valor 

const persona1 = { 
    nombre: "Homero", 
    edad: 39, 
    calle: "Av. Siempreviva 742" 
};

// Para obtener el valor de una propiedad en un objeto utilizamos la notacion punto (.)
// El nombre de la variable del objeto, seguido del punto y el nombre de la propiedad

console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.calle)

// Otra forma de obtener el valor de una propiedad en un objeto es utilizando la notacion corchete ([])
// El nombre de la variable del objeto, seguido de corchetes y dentro de ellos un string del nombre de la propiedad

console.log(persona1["nombre"])
console.log(persona1["edad"])
console.log(persona1["calle"])

// Es posible utilizar las dos notaciones para acceder a las propiedades y asignar nuevos valores a los datos almacenados en las propiedades del objeto

persona1.nombre = "Marge"
persona1["edad"] = 36

// CONSTRUCTORES
// En JS, el "constructor" de un objeto es una funcion que usamos para crear un nuevo objeto cada vez que sea necesario
// Al usar la instancia "new", se inicializa las propiedades del nuevo objeto con la funcion constructora

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
};

const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

// En este ejemplo, se define la funcion "Persona" donde se asignan las diferentes propiedades con los valores recibidos como parametros
// Luego, se puede construir un objeto Persona declarando una variable y asignando la referencia del objeto instanciado mediante la instancia NEW

// La palabra clave THIS refiere al elemento actual en el que se esta escribiendo el codigo.
// En las funciones constructoras, THIS esta enlazado al nuevo objeto instanciado
// THIS es muy util para asegurar que se emplean las propiedades del objeto actual

function Persona(literal) {
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.calle = literal.calle;
};

const persona1 = new Persona({nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"});

// METODO vs FUNCION
// Las funciones se pueden definir en cualquier parte del codigo, y pueden ser llamadas en cualquier parte del codigo posterior a estas.
// Los metodos son funciones que solo se pueden ejecutar desde el mismo objeto

// Funciones: Generalmente devuelven un valor y son de acceso global
function f1() {
    return this;
}

// Metodos: Requiere de un objeto y puede no retornar un valor
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
};

// NOTA: Los metodos funcionan similar a lo que se ve en Python (EJ: .lower(), .upper(), etc)

let cadena = "HOLA BUENOS DIAS"

console.log(cadena.length);
console.log(cadena.toLowerCase()); // Equivalente a .lower() en py
console.log(cadena.toUpperCase()); // Equivalente a .upper() en py

// Podemos crear nuestros propios metodos para objetos personalizados referenciando funciones por su nombre o definiendo funciones anonimas asociadas a una propiedad de la funcion constructora
// Llamar a un metodo es similar a acceder a una propiedad, pero se agrega () al final del nombre del metodo, posiblemente con argumentos

function Persona(literal) {
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.calle = literal.calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
};

const persona1 = new Persona("Homero", 39,"Av. Siempreviva 742");

persona1.hablar();

// OPERADOR in / For ... in
// El operador IN devuelve TRUE si la propiedad especificada existe en el objeto
// EL bucle FOR ... IN permite acceder a todas las propiedades del objeto, obteniendo una propiedad por cada iteracion


const persona1 = new Persona({nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"});

console.log("nombre" in persona1); // True
console.log("origen" in persona1); // False
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
};

// CLASES
// Son una equivalencia al uso de la funcion constructura y permiten definir distintos tipos de metodos

class Persona{
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
}

const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");

// En la declaracion de clase, la funcion constructora es reemplazada por el metodo constructor.
// Los metodos en las clases no referencian a propiedades, se declaran dentro del bloque sin la palabra FUNCTION

class Persona{
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablar(){ // --> Metodo dentro de clase va sin la palabra FUNCTION
        console.log("HOLA SOY "+ this.nombre);
    }
}

const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
persona1.hablar();

