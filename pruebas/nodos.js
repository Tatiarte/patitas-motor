const Nodo = require("../src/Nodo");


// Atención 1
const vacunacion = new Nodo({
    fecha: "02/02",
    motivo: "Vacunación",
    veterinario: "Dra. Ríos",
    costo: 85000
});

// Atención 2
const controlPeso = new Nodo({
    fecha: "15/03",
    motivo: "Control de peso",
    veterinario: "Dr. Gómez",
    costo: 40000
});

// Atención 3
const limpiezaDental = new Nodo({
    fecha: "20/05",
    motivo: "Limpieza dental",
    veterinario: "Dra. Ríos",
    costo: 150000
});

// El orden es así: nombramos la variable cabeza que guarda la referencia en el primer nodo, no es que la cabeza
// sea la primera referencia por si sola, es que gracias a ella se inicia la referencia en el primer nodo, 
// luego para hacer la secuencia el primer nodo llama al segundo que es controlPeso, luego el control peso llama al 
// siguiente nodo que será limpiezaDental
const cabeza = vacunacion;
vacunacion.siguiente = controlPeso;
controlPeso.siguiente = limpiezaDental;


// ¿y cómo termina el nodo? podría decir esto - limpiezaDental.siguiente = null; 
// pero esto no es necesario nombrarlo porque ya habiamos dicho que el último nodo es null, lo dijimos en la clase
// en el archivo pruebas. Cuando digo esto- this.siguiente= null significa que cada vez que construyo un nodo nuevo 
// su propiedad siguiente comienza automáticamente en null

//Paso 5:
// El while significa que se repetirá una instrucción mientras que la condición sea verdadera. Entonces aquí estamos ubicandonos en la posición actual
// que vendría siendo console.log(actual.dato) entonces, cabeza y actual son lo mismo, es decir son la referencia, pero cabeza debe quedarse al inicio 
// y movernos con "actual". Así podemos desplazarnos de nodo en nodo. Ahora, para pasar al siguiente nodo usamos actual (la posición del nodo 1)
// y actual.siguiente indica que nos desplazamos a la posición del segundo nodo.

let actual = cabeza;
while (actual !== null) {
    console.log(actual.dato)
    actual = actual.siguiente

}

// Luego, en el mismo paso 5 nos dice que debemos calcular el costo total, entonces hacemos otro recorrido para sumar los costos
// Debe ser otro while, es decir, otro recorrido debido a que el actual del anterior while ya llego a null (ya finalizo)
// En este while creamos el acumulador con la variable let e inicia en 0. actual = cabeza para iniciar y debe terminar en actuall = null
// Recorremos y sumamos total += actual.dato.costo; que es lo mismo que decir esto-  total = total + actual.dato.costo;
// actual.dato: accede a la información de la atención.
// actual.dato.costo: accede específicamente al costo.
// actual.siguiente: permite avanzar al siguiente nodo.
let total = 0;
actual = cabeza;

while (actual !== null) {
    total = total + actual.dato.costo;
    actual = actual.siguiente;
}

console.log("Costo total:", total);