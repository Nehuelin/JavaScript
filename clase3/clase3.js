// CLASE 3: CICLOS / ITERACIONES

// CICLOS POR CONTEO: Repiten un bloque de codigo un numero de veces especifica. (Bucle FOR)
// CICLOS CONDICIONALES: Repiten un bloque de codigo hasta que se cumpla una condicion. (Bucle WHILE \ DO... WHILE)

// CICLO FOR

let desde = false;
let hasta = false;
let actualizacion = false;

for (desde; hasta; actualizacion) {
    // codigo en bucle
};

// DESDE: Zona donde se establecen los valores iniciales de las variables que controlan el ciclo
// HASTA: Unico elemento que determina si se continua o se detiene el ciclo
// ACTUALIZACION: Nuevo valor que se le asigna despues de cada repeticion a las variables que controlan el ciclo

// EJEMPLO:
for (let i = 0; i <= 10; i++) {
    alert(i);
}


// Sentencia BREAK (Rompe el ciclo)
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    alert(i)
}

// Sentencia CONTINUE (Saltea la repeticion actual del ciclo)
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    alert(i)
}

// CICLO WHILE

let condicion = false;
while (condicion) {
    // codigo en bucle
}

// DO ... WHILE
// A diferencia del While convencional, la estructura Do ... While garantiza que el bucle se ejecute al menos una vez
// Esto se debe a que la condicion se verifica al final del bucle, no al principio

let repeticion = False;
do {
    console.log("Imprimir esto una vez!");
} while (repeticion)


// SWITCH
// Esta diseñada para manejar multiples condiciones sobe una misma variable (Similar a usar varios if, pero usar Switch es mas ordenado)

let numero = 10;

switch(numero) {
    case 5:
        //...
        break;
    case 8:
        //...
        break;
    case 2:
        //...
        break;
    default:
        //...
        break;
}

// Cada condicion se evalua con un CASE, y si se cumple se ejecuta el bloque dentro del CASE. 
// Si no se cumple ninguna de las condiciones de ningun CASE, se ejecutara el bloque dentro de DEFAULT