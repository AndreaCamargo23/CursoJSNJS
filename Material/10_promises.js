/**
 * Promises
 * Ayudan a controlar funciones asincronas, nos ayuda a verificar 
 * si se estan resolviendo adecuadamente o no se esta haciendo. 
 * 
 */

//Es una función que esta retornando una nueva promesa, esta funcion es en forma expresiva
const getData=(error)=> new Promise((resolve, reject)=>{//Es una funcion que recibe un callback
    //Esto al ser una funcion podemos enviar parametros
    //El orden importa, primero resolve y despues reject
    if(!error){
        resolve({
            nombre: 'Andrea',
            apellido:'Camargo'
        })
    }else{
        reject('No pudimos obtener los datos');
    }
});

/**
 * Then y catch, son elementos de la promesa
 * ambos reciben un callback
 */

getData(true).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});//Aqui retorna una promesa y nos habilita los metodos de esta promesa. 


//Ejemplo 

const getData1=new Promise((resolve, reject)=>{//Es una funcion que recibe un callback

});


