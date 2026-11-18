// Este archivo lo cree porque aquí registre la clase class ListaEnlazada y agregue los diferentes métodos
// Recuerda repasar nuevamente los condicionales en estos casos y el ciclo while para que comiences a aprender a construir el
// código desde cero.
// Pendiente: continuar con el curso aprende javascript desde 0

const Nodo = require("./Nodo");

// this.cabeza = null: todavía no existe un primer nodo.
//this.cola = null: tampoco existe un último nodo.
//this.tamanio = 0: la lista comienza sin elementos.
class ListaEnlazada {
    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.tamanio = 0;
    }

    estaVacia() {
        return this.cabeza === null;
    }

    //construcción del método
    // 1. Creamos un nodo nuevo.
    // 2. Si la lista está vacía, cabeza y cola apuntan al nuevo nodo.
    // 3. Si ya hay nodos, el nuevo apunta a la antigua cabeza.
    // 4. Actualizamos la cabeza.
    // 5. Aumentamos el tamaño.
    // pregunta para Tati, nuevoNodo.siguiente = this.cabeza; ¿por qué ejecutar esta línea antes de actualizar this.cabeza = nuevoNodo?
    // Porque el método revisa si hay nodos para que el nuevo que se vaya a agregar apunte a la antigua cabeza
    agregarAlInicio(dato) {
        const nuevoNodo = new Nodo(dato);

        if (this.estaVacia()) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            nuevoNodo.siguiente = this.cabeza;
            this.cabeza = nuevoNodo;
        }

        this.tamanio++;
    }

    // Esto es un método
    // this.cola.siguiente = nuevoNodo; --> conecta el último nodo actual con el nuevo
    //this.cola = nuevoNodo; --> actualiza la referencia cola para que apunte al nuevo último nodo
    agregarAlFinal(dato) {
        const nuevoNodo = new Nodo(dato);

        if (this.estaVacia()) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            this.cola.siguiente = nuevoNodo;
            this.cola = nuevoNodo;
        }

        this.tamanio++;
    }

    // Esto también es un método
    // Obtener tamanio
    obtenerTamanio() {
        return this.tamanio;
    }


    // Método recorrer(callback): callback es una función que le entregamos a otro método para que este la ejecute cuando
    // corresponda, en este caso quiero que recorrer() visite cada nodo y ejecute una función sobre su dato
    // Qué hace cada instrucción?
    // 1. let actual = this.cabeza: comenzamos desde el primer nodo.
    // 2. while (actual !== null): seguimos mientras exista un nodo.
    // 3. callback(actual.dato): ejecutamos la función que nos entregaron, usando el dato del nodo actual.
    /// 4. actual = actual.siguiente: avanzamos al siguiente nodo.
    // Tati, fijate que usamos actual y no modificamos this.cabeza. Así conservamos la referencia al primer nodo.

    recorrer(callback) {
        let actual = this.cabeza;

        while (actual !== null) {
            callback(actual.dato);
            actual = actual.siguiente;
        }
    }

    // La idea de este método es que me arroje un arreglo: [
    //  "Consulta inicial",
    //  "Vacunación",
    //  "Control de peso",
    //  "Limpieza dental"
    //  ]
    // Para entender este método: Aquí estamos reutilizando recorrer().- Creamos un arreglo vacío. - Recorremos cada nodo.
    //- Por cada dato, usamos push() para agregarlo al arreglo.- Finalmente, devolvemos el arreglo.
    aArreglo() {
        const arreglo = [];

        this.recorrer((dato) => {
            arreglo.push(dato);
        });

        return arreglo;
    }

}
module.exports = ListaEnlazada;


