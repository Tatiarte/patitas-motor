
const Nodo = require("./Nodo");

class Cola {
    constructor() {
        this.frente = null;
        this.final = null;
        this.cantidad = 0;
    }

    // Agregar un elemento al final de la cola
    encolar(dato) {
        const nuevoNodo = new Nodo(dato);

        if (this.estaVacia()) {
            this.frente = nuevoNodo;
            this.final = nuevoNodo;
        } else {
            this.final.siguiente = nuevoNodo;
            this.final = nuevoNodo;
        }

        this.cantidad++;
    }

    // Retirar el primer elemento de la cola
    desencolar() {
        if (this.estaVacia()) {
            return null;
        }

        const datoEliminado = this.frente.dato;

        this.frente = this.frente.siguiente;

        if (this.frente === null) {
            this.final = null;
        }

        this.cantidad--;

        return datoEliminado;
    }

    // Consultar el primer elemento sin retirarlo
    verFrente() {
        if (this.estaVacia()) {
            return null;
        }

        return this.frente.dato;
    }

    // Comprobar si la cola está vacía
    estaVacia() {
        return this.frente === null;
    }

    // Consultar cuántos elementos hay
    tamanio() {
        return this.cantidad;
    }
}

module.exports = Cola;
