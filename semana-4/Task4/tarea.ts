/*

¿Qué es una lista enlazada?
Es un tipo de estructura de datos donde en una lista enlazada, cada elemento contiene una referencia al siguiente elemento de la lista.

¿Qué diferencia a una lista enlazada de un Arreglo?
La diferencia de un array, los elementos no se ordenan secuencialmente uno tras otro en memoria y tampoco contienen un índice que nos permita acceder a cada elemento de la lista individualmente.


¿Qué es un nodo?

Es una caja donde guardamos dos cosas, la primera es el dato que queremos tener en la lista y la segunda es la que apunta al siguiente dato de la lista.


Describa como se agrega un elemento al final de una lista

Llega un dato como parametro y entra por medio de un metodo que verifica si esta vacio o no, este entra a la condicion ya que recibe un parametro y luego vuelve a preguntar si esta vacio, en este caso no entra y pregunta de nuevo si habia un nuevo nodo y como es el primero que crea el primero y unico nodo con el dato nuevo cuando se cumpla la condicion que lista esta vacia. Cuando entra otro dato hace la misma condicion pasada y entra al while y se crea una variable auxiliar que este indica que si la liga del nodo es null osea esta en la ultima posicion, se crea un nuevo nodo con un nuevo dato que esta pasa a ser el ultimo, y si llega a entro dato nuevo, pasa por todoas estas condincienes y se repite.
*/