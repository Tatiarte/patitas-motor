
const { performance } = require("node:perf_hooks");
const Cola = require("../src/Cola");

const cantidad = 100000;

// Crear los 100.000 turnos
const turnos = Array.from({ length: cantidad }, (_, i) => ({
    mascota: `Mascota ${i + 1}`,
    tutor: `Tutor ${i + 1}`,
    horaLlegada: "08:00",
    motivo: "Consulta general"
}));

// PRUEBA CON COLA ENLAZADA
const cola = new Cola();

let inicio = performance.now();

for (const turno of turnos) {
    cola.encolar(turno);
}

let fin = performance.now();

console.log("Cola enlazada - Encolar:", (fin - inicio).toFixed(2), "ms");

inicio = performance.now();

while (!cola.estaVacia()) {
    cola.desencolar();
}

fin = performance.now();

console.log("Cola enlazada - Desencolar:", (fin - inicio).toFixed(2), "ms");


// PRUEBA CON ARREGLO
const arreglo = [];

inicio = performance.now();

for (const turno of turnos) {
    arreglo.push(turno);
}

fin = performance.now();

console.log("Arreglo - Encolar:", (fin - inicio).toFixed(2), "ms");

inicio = performance.now();

while (arreglo.length > 0) {
    arreglo.shift();
}

fin = performance.now();

console.log("Arreglo - Desencolar:", (fin - inicio).toFixed(2), "ms");
