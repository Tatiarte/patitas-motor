 
 
 
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