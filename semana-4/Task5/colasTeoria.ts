/* 

¿Qué es una Cola? 
Es un estructura de datos que esta compuesta por varios elementos donde se agregan data al final de la serie y retiramos por el frente osea el primero entrear, es el primero en salir (FIFO).


¿Cuáles son los métodos principales de una cola?
Dos metodos importantes. Enqueue: agrega un elemento a la cola y dequeue: retira el primer elemento de la cola

¿Cuál es la diferencia entre una cola y una cola de prioridades?
Es un tipo de dato similar a una cola normal en la que cada elemento tiene ademas una prioridad asociada, osea que cada elemento en una estructura  de datos dentro de una prioridad establecidad, se vera primero que cualquiera. un un ejemplo es cuando se escanea una gran coleccion de datos y se necesita informa elementos de maxima prioridad.



La diferencia es igual pero tiene algunas diferencias en los metodos como enqueue: se agrega un elemento y su prioridad. Esta operación tiene una complejidad asintótica de O(1). Dequeue: se retira el primer elemento de mayor prioridad. Esta operación tiene una complejidad asintótica de O(n) ya que se debe buscar el elemento de mayor prioridad.


------------------------------------------------------


¿Qué es una pila?
Estructura que almacena datos en la que opera de forma lineal y unidireccional. En otras palabras solo hay una forma para agregar elementos y estos se incorporan en un orden dado en una sola direccion, inicio y fin. Opera bajo una modalidad LIFO(last in first out) ultimo en agregar, primero en salir


¿En qué se diferencia una pila de una cola?

La pila solo tiene un extremo abierto para empujar y hacer estallar los elementos de datos en la otra parte. La cola tiene ambos extremos abiertos para encolar y sacar en cola los elementos de datos.


En que las colas Ambos extremos son accesibles para las operaciones. y se puede hacer una eliminación en la cabecera; y las pilas, los elementos se agregan de un extremo de la cola llamado final y se elimina del otro extremo de la cola llamado frente 


¿Cuáles son los métodos de una pila y para qué sirve cada uno?
PUSH: agregar un nuevo valor a ala pila, osea al final; POP: retorna el ultimo valor ingresado a la pila, sacandolo de esta; PEEL: retorna el ultimo valor ingresado a la pila, sin sacarlo de esta; SIZE: retorna el ultimo de los elementos que contiene la pila; PRINT: muentra el contenido de la pila.
*/