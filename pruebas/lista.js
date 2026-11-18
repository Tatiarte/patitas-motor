// Este archivo lo creamos porque aquí guardamos las pruebas del MINIRETO 2 del día 1 donde probamos diferentes métodos 
// tales como estaVacia, AgregarInicio y AgregarFinal, obtenerTamanio, recorrer(callback) y aArreglo.
// Pendiente: hacer resumen y probar en otros escenarios cómo implementar estos métodos a listas para que me quede bien clairitico

const ListaEnlazada = require("../src/ListaEnlazada");

const lista = new ListaEnlazada();

console.log(lista.estaVacia());


lista.agregarAlFinal("vacunacion");

console.log(lista.estaVacia());
console.log(lista.cabeza.dato);
console.log(lista.cola.dato);
console.log(lista.obtenerTamanio());

// Lo anterior debe imprimir True, false, vacunacion, vacunacion, 1 --> primera prueba empieza vacía, recibe un nodo al final,
// Actualiza correctamente cabeza y cola y finalmente registra que tiene un elemento.


lista.agregarAlFinal("Control de peso");
lista.agregarAlFinal("Limpieza dental");

console.log("Cabeza:", lista.cabeza.dato);
console.log("Cola:", lista.cola.dato);
console.log("Tamaño:", lista.obtenerTamanio());

// Lo anterior debe imprimir cabeza: vacunacion, cola: Limpieza dental, tamaño 3
// Tati como puedes ver cabeza sigue apuntando a vacunacion porque lo que hicimos fue agregar nodos al final


lista.agregarAlInicio("Consulta inicial");

console.log("Cabeza:", lista.cabeza.dato);
console.log("Cola:", lista.cola.dato);
console.log("Tamaño:", lista.obtenerTamanio());

// lo anterior es que estoy haciendo las pruebas que registre en la bitácora pero agregando nodo al inicio, debe pasar que 
// cambia la referencia del nodo al inicio pero no al final: el resultado es cabeza: consulta inicial, cola: Limpieza dental
// y tamaño: 4




console.log("Recorrido de la lista:");

lista.recorrer((dato) => {
    console.log(dato);
});


// lo anterior quiere decir que aplique recorrer(callback) como método de la clase en ListaEnlazable.js e imprimimos aquí con el console.log anterior
// debe imprimir esto: Recorrido de la lista: Consulta inicial, Vacunación, Control de peso, Limpieza dental


console.log("Lista convertida en arreglo:");
console.log(lista.aArreglo());

// lo anterior quiere decir que aplique un arreglo, como los que vimos la semana pasada: 
// Tati, observa que aquí he vuelto a utilizar recorrer() y lo usé dentro del aArreglo(), así no tengo que volver
// a escribir todo el while, es bueno hacer esto porque así reutilizo el código, esto facilita el mantenimiento entonces
// intenta usarlo siempre que puedas como buena practica.

//  [
//   'Consulta inicial',
//   'Vacunación',
//   'Control de peso',
//   'Limpieza dental'
//  ]

//AQUI EMPIEZA LA ULTIMA PARTE DEL MINIRETO 2 DEL DIA 1 - LAS 6 PRUEBAS DE ACEPTACIÓN QUE REGISTRE EN LA BITÁCORA


// CASO 1: Agregar al inicio con la lista vacía
const lista1 = new ListaEnlazada();
lista1.agregarAlInicio("A");

console.log("\nCASO 1 - Inicio, lista vacía");
console.log("Cabeza:", lista1.cabeza.dato);
console.log("Cola:", lista1.cola.dato);
console.log("Tamaño:", lista1.obtenerTamanio());


// CASO 2: Agregar al inicio con un nodo
const lista2 = new ListaEnlazada();
lista2.agregarAlFinal("A");
lista2.agregarAlInicio("B");

console.log("\nCASO 2 - Inicio, un nodo");
console.log("Cabeza:", lista2.cabeza.dato);
console.log("Cola:", lista2.cola.dato);
console.log("Tamaño:", lista2.obtenerTamanio());


// CASO 3: Agregar al inicio con varios nodos
const lista3 = new ListaEnlazada();
lista3.agregarAlFinal("A");
lista3.agregarAlFinal("B");
lista3.agregarAlFinal("C");
lista3.agregarAlInicio("D");

console.log("\nCASO 3 - Inicio, varios nodos");
console.log("Cabeza:", lista3.cabeza.dato);
console.log("Cola:", lista3.cola.dato);
console.log("Tamaño:", lista3.obtenerTamanio());


// CASO 4: Agregar al final con la lista vacía
const lista4 = new ListaEnlazada();
lista4.agregarAlFinal("A");

console.log("\nCASO 4 - Final, lista vacía");
console.log("Cabeza:", lista4.cabeza.dato);
console.log("Cola:", lista4.cola.dato);
console.log("Tamaño:", lista4.obtenerTamanio());


// CASO 5: Agregar al final con un nodo
const lista5 = new ListaEnlazada();
lista5.agregarAlFinal("A");
lista5.agregarAlFinal("B");

console.log("\nCASO 5 - Final, un nodo");
console.log("Cabeza:", lista5.cabeza.dato);
console.log("Cola:", lista5.cola.dato);
console.log("Tamaño:", lista5.obtenerTamanio());


// CASO 6: Agregar al final con varios nodos
const lista6 = new ListaEnlazada();
lista6.agregarAlFinal("A");
lista6.agregarAlFinal("B");
lista6.agregarAlFinal("C");
lista6.agregarAlFinal("D");

console.log("\nCASO 6 - Final, varios nodos");
console.log("Cabeza:", lista6.cabeza.dato);
console.log("Cola:", lista6.cola.dato);
console.log("Tamaño:", lista6.obtenerTamanio());
