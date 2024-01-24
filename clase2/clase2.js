// CLASE 2: CONTROL DE FLUJO

// VALORES BOOLEANOS: Son los que dan True or False a partir de una condicion dada
// Se utiliza la estructura if 

if (true){
    console.log("Vas a ver este mensaje");
}
if (false) {
    console.log("No vas a ver este mensaje")
}

// OPERADORES DE COMPARACION

let unNumero = 5
if (unNumero == 5){
    console.log("Vas a ver este mensaje");
}
if (unNumero == 6){
    console.log("No vas a ver este mensaje");
}

// if ... else
// Notese la diferencia con Python: En vez de poner la condicion sin intermediarios, en Javascript se ponen dentro de parentesis. 
// Y en vez de usar ":" para marcar las instrucciones, se usa {}
let unColor = 'Rojo'
if (unColor == 'Rojo'){
    console.log("El color es Rojo");
}else{
    console.log("El color NO es rojo");
}

// if ... else if

let precio = prompt("Ingresar precio")
if (precio < 20){
    alert("El precio es menor que 20");
}
else if (precio < 50){
    alert("El precio es menor que 50");
}
else if (precio < 100){
    alert("El precio es menor que 100");
}
else {
    alert("El precio es mayor que 100");
}

// VARIABLES BOOLEANAS
// Variables que tienen como valor True o False

let numero = 10

let esMayor5 = (numero > 5);

if (esMayor5){
    alert("Resultado dio TRUE");
}

// OPERADORES LOGICOS/RELACIONALES

// A == B --> A es igual a B
// A === B --> A es estrictamente igual a B
// A != B --> A es distinto a B
// A !== B --> A es estrictamente distinto a B
// A <, <=, >, >= B --> A es menor/menor o igual/mayor/mayor o igual a B
// a && b --> a AND b
// a || b --> a OR b
// !a --> NOT a 

// NOTA: A == B y A != B solo considera el formato (Si es str o numerico)
// A === B y A !== B considera el formato y contenido