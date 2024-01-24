// CLASE 9: DOCUMENT OBJECT MODEL (DOM)

// El Modelo de Objetos del Documento (DOM) es una estructura de objetos generada por el navegador, la cual representa la pagina HTML actual
// Con JavaScript la empleamos para acceder y modificar de forma dinamica elementos de la interfaz
// Es decir que, por ejemplo, desde JavaScript se puede modificar el texto contenido en la etiqueta <h1>

// ¿COMO FUNCIONA?
// La estructura de un documento HTML son las etiquetas
// En el DOM, cada etiqueta HTML es un objeto, el cual se llama NODO
// Las etiquetas anidadas son llamadas "nodos hijos" de la etiqueta "nodo padre" que las contiene
// Todos estos objetos son accesibles empleando JavaScript mediante el objeto global DOCUMENT
// Por ejemplo, "document.body" es el nodo que representa la etiqueta <body>

// ESTRUCTURA DOM
// Cada etiqueta HTML se transforma en un nodo de tipo "Elemento". La conversion se realiza de forma jerarquica
// De esta forma, del nodo raiz solamente pueden derivar los nodos HEAD y BODY
// Cada etiqueta HTML se transforma en un nodo que deriva del correspondiente a su "etiqueta padre"
// La transformacion de las etiquetas HTML habituales generan dos nodos:
// --> NODO ELEMENTO: correspondiente a la propia etiqueta HTML
// --> NODO TEXTO: contiene el texto encerrado por esa etiqueta HTML

// Los navegadores modernos brindan medios para editar el DOM de cualquier pagina en tiempo real.    
// Ejemplo: en Chrome podemos hacerlo mediante la herramienta para desarrolladores en la pestaña "Elements"

//EJEMPLO APLICADO: Acceso por objeto document
console.dir(document);
console.dir(document.head);
console.dir(document.body);

// El acceso a body usando la referencia document.body requiere que el script se incluya al final del <body> en el HTML

// TIPOS DE NODOS
// La especificacion completa de DOM define 12 tipos de nodos:

// --> DOCUMENT NODE (Nodo Documento):
// Representa todo el documento y sirve como punto de entrada principal para acceder a otros nodos en el árbol DOM.

// --> ELEMENT NODE (Nodo Elemento):
// Representa elementos HTML y XML. Cada etiqueta HTML (por ejemplo, <p>, <div>, <span>) crea un nodo de elemento.

// --> ATTRIBUTE NODE (Nodo Atributo):
// Representa atributos dentro de un elemento. Cada atributo, como id o class, es un nodo de atributo.

// --> TEXT NODE (Nodo de Texto):
// Representa el contenido de texto dentro de un elemento. Por ejemplo, el texto dentro de un párrafo o un título.

// --> COMMENT NODE (Nodo de Comentario):
// Representa comentarios en el código HTML o XML.

// --> DOCUMENT TYPE DECLARATION NODE (Nodo de Declaración de Tipo de Documento):
// Representa la declaración del tipo de documento (<!DOCTYPE>).

// --> DOCUMENT FRAGMENT NODE (Nodo de Fragmento de Documento):
// Representa un fragmento de documento que no tiene un nodo raíz. Es útil para manipulaciones antes de agregar elementos al árbol DOM principal.

// --> PROCESSING INSTRUCTION (Nodo de Instrucción de Procesamiento):
// Representa instrucciones de procesamiento en documentos XML.

// --> CDATA SECTION NODE (Nodo de Sección CDATA):
// Representa secciones CDATA en documentos XML.

// --> ENTITY REFERENCE NODE (Nodo de Referencia de Entidad):
// Representa referencias a entidades, como &lt; para < y &gt; para >.

// --> ENTITY NODE (Nodo de Entidad):
// Representa entidades definidas en el documento, como &copy; para el símbolo de copyright.

// --> NOTATION NODE (Nodo de Notación):
// Representa notaciones declaradas en el documento.

// ACCESO A NODOS
// Existen distintos metodos para acceder a los elementos del DOM empleando en la clase Document
// Los mas comunes son: 
// --> getElementById()
// --> getElementsByClassName()
// --> getElementsByTagName()

// El metodo GETELEMENTBYID() sirve para acceder a un elemento de la estructura HTML, utilizando su atributo ID como identificacion
let div = document.getElementById("app"); 
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML)
console.log(parrafo.innerHTML)

// El metodo GETELEMENTBYCLASSNAME() sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su atributo class como identificacion
// Se retornara un array de elementos con todas las coincidencias
let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);

// El metodo GETELEMENTBYTAGNAME() sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su nombre de etiqueta como identificacion
// Esta opcion es la menos especifica de todas, ya que es muy probable que las etiquetas se repitan en el codigo HTML
let contenedores = document.getElementsByTagName("div")
console.log(contenedores[0].innerHTML)
console.log(contenedores[1].innerHTML)
console.log(contenedores[2].innerHTML)

// EJEMPLO APLICADO: Recorrer HTMLcollection con For ... of

for (const pais of paises) {
    console.log(pais.innerHTML);
}
for (const div of contenedores) {
    console.log(div.innerHTML);
}

// MODIFICAR NODOS
// La propiedad INNERTEXT de un nodo permite modificar su nodo de texto
// Es decir, acceder y/o modficar el contenido textual de algun elemento del DOM
let titulo = document.getElementById("titulo")
console.log(titulo.innerText) // Hola Mundo!
titulo.innerText = "Hola Usuario!"
console.log(titulo.innerText) // Hola Usuario!

// La propiedad INNERHTML permite definir el codigo HTML interno del elemento seleccionado. 
// El navegador lo interpreta como codigo HTML y no como contenido de texto, permitiendo desde un string crear una nueva estructura de etiquetas y contenido
// Al pasar un string con formato de etiquetas HTML y contenido a traves de la propiedad innerHTML, el navegador genera nuevos nodos con su contenido dentro del elemento seleccionado
let container = document.getElementById("contenedor")
container.innerHTML = "<h2>Hola mundo!</h2><p>Lorem Ipsum</p>"

// La propiedad CLASSNAME permite acceder al atributo class de algun nodo seleccionado y definir cuales van a ser sus clases
container.className = "container row"

// AGREGAR O QUITAR NODOS
// El metodo CREATEELEMENT() permite crear elementos
// Se debe indicar como parametro el nombre de etiqueta HTML que representara ese elemento
// Luego debe agregaros como hijo el nodo creado con APPEND(), al body o a otro nodo del documento actual

parrafo = documento.createElement("p");
parrafo.innerHTML = '<h2>Hola Usuario!</h2>';
document.body.append(parrafo);

// El metodo REMOVE() permite eliminar un nodo seleccionado del DOM
parrafo = document.getElementById("parrafo1")
parrafo.remove()
paises = document.getElementById("paises")
paises[0].remove()

// Es posible obtener o modificar datos de un formulario HTML (inputs) desde JavaScript mediante el DOM
// Para eso solo se debe acceder a la propiedad VALUE de cada input seleccionado

document.getElementById("nombre").value = "HOMERO"
document.getElementById("edad").value = 39

// EJEMPLO APLICADO: Creando opciones desde un Array

let padre = document.getElementById("personas");
let personas = ["Homero", "Marge", "Bart", "Lisa", "Maggie"];
for (const persona of personas) {
    let li = document.createElement("li");
    li.innerHTML = persona;
    padre.appendChild(li)
}

// PLANILLAS DE TEXTO 
// Las plantillas son un medio para incluir variables en la estructura HTML de nodos nuevos o existentes, modificando el innerHTML

let producto = {id: 1, nombre: "Arroz", precio: 125}
let contenedor = document.createElement("div")
contenedor.innerHTML = `<h3> ID: ${producto.id}</H3>
                        <p> Producto: ${producto.nombre}</p>
                        <b> $ ${producto.precio}</b>`;
document.body.appendChild(contenedor);

// EJEMPLO APLICADO: Creando elementos desde objetos
const productos = [
    {id: 1, producto: "Arroz", precio: 125},
    {id: 2, producto: "Fideo", precio: 70},
    {id: 3, producto: "Pan", precio: 50},
    {id: 4, producto: "Flan", precio: 100}];

for (const producto of productos) {
    let contenedor = doucment.createElement("div")
    contenedor.innerHTML = `<h3> ID: ${producto.id}</H3>
                            <p> Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}

// El metodo QUERYSELECTOR() permite seleccionar nodos con la misma sintaxis que utilizamos en los selectores de CSS

let parrafo = document.querySelector("#contenedor p")
let contenedor = document.querySelector("#contenedor")
parrafo = codument.querySelector(".texto")

// El querySelector() tambien aplica a pseudo-clases de CSS, lo que brinda un nivel mas avanzado de precision
let radioChecked = document.querySelector(".radio:checked")

// En este ejemplo se presume que hay elementos del tipo radio button y se quiere seleccionar solo aquel que este en checked
// En este caso es posible con el querySelector() y la pseudo-clase :checked de CSS

// El metodo QUERYSELECTORALL() devuelve TODOS los elementos que coincida con el parametro de busqueda
