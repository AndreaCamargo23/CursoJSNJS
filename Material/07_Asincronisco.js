/**
 * Asincronismo
 * 1. JavaScript ejecuta el codigo en unsolo proceso. Es decir, que si necesita hacer un proceso 
 * extenso se puede detener todo el programa. Por esto, se usa el asincronismo. 
 * se volvera un subproceso el cual se encargara de realizar esa tarea y despues volver a su proceso normal. 
 * El proceso se le coonoce como el EvenLoop, ejecuta cada una de las tareas
 * la cual son apiladas en el event queue que es nuestra cola de eventos. 
 * el event loop detecta las tareas demasiadas pesadas, estas tareas se envian a una nueva pila que se llama 
 * thread pool despues de terminar todos los procesos se revisa el event queue esten terminados y el thread pool 
 * envia el proceso demasiado pesado para ejecutarse. 
 *  
 */

//Simulación 

console.log('Tarea 1');
console.log('Tarea 2');
console.log('Tarea 3');
setTimeout(()=>{
    console.log('Tarea 4');
},2000);//Recibe una función y el tiempo.
console.log('Tarea 5');

