// CLASE 11: STORAGE & JSON

// El objeto STORAGE (API de almacenamiento web) permite almacenar datos de manera local en el navegador sin necesidad de realizar ninguna conexion con el servidor
// De esta manera, cada cliente puede preservar informacion de la aplicacion 
// El navegador nos ofrece dos tipos de storage: "localStorage" y "sessionStorage"

// LOCALSTORAGE
// Los datos almacenados en localStorage (variable global preexistente) se almacenan en el navegador de forma indefinida (o hasta que se borren los datos de navegacion del browser)
// --> La informacion persiste reinicio del navegador y hasta del sistema operativo

// El metodo SETITEM() permite almacenar informacion, la cual se guarda en forma clave-valor
// El primer parametro es la clave, el cual es un nombre para identificar el elemento
// El segundo parametro es el valor/contenido del elemento

localStorage.setItem('bienvenida', 'Hola Usuario');
localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);

// Es posible ver el Storage del navegador a traves de la pestaña de APPLICATION

// El metodo GETITEM() permite acceder a la informacion almacenada en localStorage
// El metodo recibe la clave como parametro, y devuelve el valor/contenido como respuesta
// Las claves y valores de Storage se guardan en formato de CADENAS DE CARACTERES (DOMString)

let mensaje = localStorage.getItem('bienvenida');
let bandera = localStorage.getItem('esValido');
let numero = localStorage.getItem('unNumero');

console.log(mensaje);
console.log(bandera);
console.log(numero);

// SESSIONSTORAGE
// La informacion almacenada en sessionStorage (variable global preexistente) se almacena en el navegador hasta que el usuario cierra la ventana
// --> Solo existe dentro de la pestaña actual del navegador
// --> Otra pestaña con la misma pagina tendra otro sessionStorage distinto, pero se comparte entre iframes en la pestaña (asumiendo que tengan el mismo origen)

// El tratamiento es similar al localStorage

localStorage.setItem('seleccionados', [1, 2, 3]);
localStorage.setItem('esValido', false);
localStorage.setItem('email', 'info@email.com');

let lista = sessionStorage.getItem('seleccionados')
bandera = (sessionStorage.getItem('esValido') == 'true');
let email = sessionStorage.getItem('email');

console.log(typeof lista);
console.log(typeof bandera);
console.log(typeof email);

// Es posible obtener todos los valores almacenados en localStorage o sessionStorage con un bucle 
// Pero no es posible usar "for ... of" porque no son objetos iterables, ni "for ... in" porque se obtienen otras propiedades del objeto que no son valores almacenados 
// Para recorrer un Storage, se emplea el bucle for con el metodo KEY()

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log('Clave: '+ clave);
    console.log('Valor: '+ localStorage.getItem(clave));
}

// El metodo REMOVEITEM() elimina la informacion almacenada en el Storage que corresponda con la clave que se le pase como parametro

localStorage.removeItem('bienvenida')
sessionStorage.removeItem('esValido')

// El metodo CLEAR() elimina TODA la informacion del Storage 

localStorage.clear()
sessionStorage.clear()

// JSON

// Si queremos almacenar la informacion de un objeto en un storage, hay que tener en cuenta que tanto la clave como el valor se guardan en strings
// Ante cualquier otro tipo a guardar, como un numero o un objeto, se convierte a cadena de texto automaticamente
// Entonces, al buscar almacenar un objeto sin una transformacion previa, guardamos [object Object], la conversion por defecto de objeto a string
// Para guardar la informacion hay que transformar el objeto a JSON

const producto1 = {id: 2, producto: "Arroz" };
localStorage.setItem("producto1", producto1); // Se guarda [object Object]

// JavaScript Object Notation (JSON) es un formato basado en texto plano, para representar datos estructurados con la sintaxis de objetos de JavaScript
// Es comunmente utilizado para enviar y almacenar datos en aplicaciones web
// Aunque es casi similar a la sintaxis de JavaScript, puede ser utilizado independientemente de esta, y muchos entornos de programacion poseen la capacidad de leer (convertir; parsear) y generar JSON
// JSON es un string con un formato especifico

// Cuando sea necesario enviar un objeto JavaScript al servidor o almacenarlo en Storage, sera necesario convertirlo a un JSON antes de ser enviado
// El metodo STRINGIFY() acepta un objeto como parametro y devuelve su forma de texto JSON equivalente

const enJSON = JSON.stringify(producto1);

console.log(enJSON);
console.log(typeof producto1);
console.log(typeof enJSON);

localStorage.setItem("producto1", enJSON); // -> Se guarda {"id":2,"producto":"Arroz"}

// El metodo PARSE() recibe un texto JSON como parametro y devuelve el objeto JavaScript correspondiente
const producto2 = JSON.parse(enJSON)

console.log(typeof enJSON)
console.log(typeof producto2)
console.log(producto2.producto)

const producto3 = JSON.parse(localStorage.getItem("producto1"))

console.log(producto2.id)

// Muchas veces usamos el Storage para recuperar datos relacionados a la ultima navegacion del usuario
// Por ejemplo, su ultima sesion de login o el ultimo estado de su carro de compras
// Para esto, se piensa en inicializar las variables de la app consultando el Storage en el momento del inicio
// --> VER ARCHIVO EJEMPLO

// Los datos en formato JSON pueden ser almacenados en archivos externos .json (Ejemplo: datos.json)
// JSON es solo un formato de datos: contiene solo propiedades, no metodos
// Una coma o dos puntos mal ubicados pueden producir que un archivo JSON no funcione, por eso es importante ser cuidadoso para validar cualquier dato que se quiera utilizar
// A diferencia del codigo JavaScript en que las propiedades del objeto pueden no estar entre comillas, en JSON solo las cadenas entre comillas pueden ser utilizadas como propiedades
