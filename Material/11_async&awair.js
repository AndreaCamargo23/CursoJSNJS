/**
 * Forma de resolver promesas
 * 
 */

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
const main = async()=>{
    try{
        let datos= await getData(true); 
        console.log(datos);
    }catch(error){
        console.log(error);
    }
    
}

console.log('incio');
main(); 
console.log('fin');
//Para controlar los errores de async await, se utiliza el try catch 
