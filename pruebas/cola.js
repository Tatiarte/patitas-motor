
const Cola = require("../src/Cola");

const cola = new Cola();

// Cinco turnos de la clínica
const turnos = [
    {
        mascota: "Lola",
        tutor: "Ana",
        horaLlegada: "08:00",
        motivo: "Vacunación"
    },
    {
        mascota: "Toby",
        tutor: "Carlos",
        horaLlegada: "08:10",
        motivo: "Consulta por cojera"
    },
    {
        mascota: "Mía",
        tutor: "Laura",
        horaLlegada: "08:15",
        motivo: "Control posquirúrgico"
    },
    {
        mascota: "Max",
        tutor: "Pedro",
        horaLlegada: "08:20",
        motivo: "Control general"
    },
    {
        mascota: "Luna",
        tutor: "Sofía",
        horaLlegada: "08:25",
        motivo: "Vacunación"
    }
];

// Agregar los cinco turnos
turnos.forEach((turno) => {
    cola.encolar(turno);
});

console.log("¿Está vacía?", cola.estaVacia());
console.log("Cantidad de turnos:", cola.tamanio());
console.log("Siguiente mascota:", cola.verFrente().mascota);

// Atender al siguiente paciente
const atendido = cola.desencolar();

console.log("Mascota atendida:", atendido.mascota);
console.log("Ahora sigue:", cola.verFrente().mascota);
console.log("Turnos restantes:", cola.tamanio());

// Consultar los turnos restantes
console.log("Turnos pendientes:");

while (!cola.estaVacia()) {
    const turno = cola.desencolar();
    console.log(turno.mascota, "-", turno.motivo);
}

// Comprobar que quedó vacía
console.log("¿Está vacía?", cola.estaVacia());
console.log("Frente:", cola.frente);
console.log("Final:", cola.final);
console.log("Desencolar vacía:", cola.desencolar());
