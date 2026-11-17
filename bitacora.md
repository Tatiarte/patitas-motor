 
 
 
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

