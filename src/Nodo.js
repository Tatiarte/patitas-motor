// creamos la clase nodo: se entiende como un molde que crea nodos
//constructor (dato) es el método que se va a ejecutar cuando creamos un nuevo nodo y recibe la información que queremos guardar
// this.dato = dato; guarda la información recibida dentro de la propiedad dato del nodo
//this.siguiente = null Crea la propiedad siguiente, que inicialmente no apunta a ningún otro nodo entonces por eso inicia en null


class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

//Permite utilizar esta clase desde otros archivos de JavaScript
module.exports = Nodo;