 
 
 
 cabeza
   |
   v
┌──────────────┐      ┌─────────────────┐      ┌──────────────────┐
│  Vacunación  │ ---> │ Control de peso │ ---> │ Limpieza dental  │ ---> null
│   $85.000    │      │    $40.000      │      │    $150.000      │
└──────────────┘      └─────────────────┘      └──────────────────┘

const cabeza = vacunacion;
vacunacion.siguiente = controlPeso;
controlPeso.siguiente = limpiezaDental;

Rompemos la conexión entre nodos:

vacunacion.siguiente = null;
vacunacion.siguiente = controlPeso;
controlPeso.siguiente = limpiezaDental;

Nos queda lo siguiente:

 cabeza
   |
   v
┌──────────────┐      ┌─────────────────┐      ┌──────────────────┐
│  Vacunación  │      │ Control de peso │ ---> │ Limpieza dental  │
│   $85.000    │      │    $40.000      │      │    $150.000      │
└──────────────┘      └─────────────────┘      └──────────────────┘
       |
      null


Ahora solo aparece el nodo Vacunación y se cierra el recorrido, los demás nodos quedan desarticulados.

La cabeza, como hemos visto en el minireto es la que le da referencia al primer nodo, cuando modificamos con vacunacion.siguiente = null;
lo que estamos haciendo es romper el flujo de nodos, porque el nodo Vacunación se vuelve la posición de cabeza (referencia) y donde finaliza el recorrido. Los demás nodos quedan desconectados y segun el video del primer día, quedan desconectados pero, permanecen en la memoria porque tenemos
en el archivo prueba.js todavía la información de los demás nodos. Solo para efectos de While el ciclo inicia en Vacunación y cuando actual cambia al
siguiente nodo lo termina porque llega al null

MINIRETO 2

cabeza                         cola
  |                              |
  v                              v
  A  ---->  B  ---->  C  ---->  D  ----> null

  
  6 casos explorados

  | Caso | Cabeza | Cola | Tamaño |
| --- | --- | --- | --- |
| Inicio, lista vacía, agregar A | A | A | 1 |
| Inicio, un nodo A, agregar B | B | A | 2 |
| Inicio, A → B → C, agregar D | D | C | 4 |
| Final, lista vacía, agregar A | A | A | 1 |
| Final, un nodo A, agregar B | A | B | 2 |
| Final, A → B → C, agregar D | A | D | 4 |

Resultados luego del análisis:
1. Lista vacía: cabeza y cola comienzan en null. Al agregar el primer nodo, ambas referencias apuntan al mismo nodo.
2. Inserción al inicio: el nuevo nodo apunta a la antigua cabeza y luego cabeza se actualiza. La cola no cambia, excepto cuando la lista estaba vacía.
3. Inserción al final: la antigua cola conecta su propiedad siguiente con el nuevo nodo y luego cola se actualiza. La cabeza no cambia, excepto cuando la lista estaba vacía.

Complegidad algoritmica:

- agregarAlInicio(): O(1), porque no recorre la lista.
- agregarAlFinal(): O(1), porque tenemos una referencia directa a la cola.

| Método | Complejidad | ¿Por qué? |
| --- | --- | --- |
| estaVacia() | $O(1)$ | Consulta directamente cabeza. |
| agregarAlInicio() | $O(1)$ | Actualiza referencias sin recorrer nodos. |
| agregarAlFinal() | $O(1)$ | Utiliza cola para acceder directamente al último nodo. |
| obtenerTamanio() | $O(1)$ | Devuelve una variable. |
| recorrer() | $O(n)$ | Visita todos los nodos. |
| aArreglo() | $O(n)$ | Recorre todos los nodos y agrega sus datos al arreglo. |



Las carpetas del día dos son:

Cola- Recepcion - Pila - Editor - Simulacion

Recorrido de hoy
la pila --- la cola --- tipos de cola --- pila vs cola (comparación)

Las pilas y las colas son estructuras lineales como la lista enlazada pero con reglas estrictas de cómo entran y salen los elementos:
Empezamos por la PILA, que sigue el principio LIFO: el último en entrar es el primero en salir.

Pensemos en una pila de platos, el ultimo que pongo es el primero que retiro. 

La pila tiene tres operaciones:

1. Push() inserta un elemento en la parte superior. Si hago push de 10, 20, 30, entonces 30 queda arriba
2. pop() elimina el elemento de arriba, o sea el 30 para el caso del ejemplo 
3. peek() mira el elemento superior sin eliminarlo.

Las tres son O(1) --> Tiempo constante

Las pilas están en la evaluacion de expresiones matematicas, algoritmos de retroceso, historial de navegador, en la pila de llamadas de funciones y en el deshacer y rehacer de los editores.

Cola
Sigue el principio de FIFO --> el primero en entrar es el primero en salir
como la fila en un banco, la primera de la fila es la primera en ser atendida
sus operaciones:
1. enqueue (x) Inserta un elemento al final de la cola
2. dequeue() Elimina el primero, el mas antiguo
3. front() Mira el primero sin sacarlo

Tambien son O(1) por eso las colas son tan eficientes

Tres tipos de colas:
Cola simple: sigue estrictamente el principio FIFO
Cola circular: el último elemento se conecta con el inicio para aprovechar mejor la memoria
Cola de prioridad: los elementos no se procesan por orden de llegada sino por su prioridad.

Pila es LIFO se inserta con push se elimina con pop y el uso comun con Backtracking
COLA es FIFO se inserta con enqueue se elimina con dequeue y el uso común en Gestión de procesos

A la recepción en el minireto 5 construimos la sala de espera, una clase cola con referencias al frente y al final reutilizando la clase nodo, encolar y desencolar no pueden tener ciclos y la comparas con un arreglo. Un arreglo con shift() funciona pero cada shift mueve todos los elementos, midelo con 100.000 turnos en las dos implementaciones (console.time) 

Minireto 6, urgencias primero
La recepcion tiene dos colas: urgencias y generales
Urgencias se atienden antes que cualquier consulta general pero en cualquier tipo se respeta el orden de llegada.
Se prueba con la mañana del sabado 7 mascoras 1 consultorio y 20 minutos por atención

Toby entra a las 8, a las 8:20 consultorio queda libre, estan esperando a Max que llego a las 8:05 y Luna a urgencias a las 8:10 quién sigue? sigue luna porque es una urgencia y va primero, el resto de la mañana lo calculo yo en la bitácora a mano
