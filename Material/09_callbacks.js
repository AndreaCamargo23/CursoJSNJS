/**
 * Callbacks-Función que se pasa como argumento a otra función
 * para que estas una vez terminas sus tareas ejecuten sus tareas
 * Fuinciones que se pasan como parametro a otras funciones
 */


const suma =(a,b,cb)=>{
    cb(a+b);
}
const imprimir = (data)=>console.log(data);

suma(1,2,imprimir);

//Gestionar las formas asincronas de javascript
/*
const getData=(cb)=>{
    setTimeout(()=>{
        cb({
            nombre:'Andrea',
            apellido:'Camargo'
        });
    },3000);    
}

const imprimirData=(data)=>console.log(data);
getData(imprimirData);*/


const getData=(cb,cbError)=>{
    if(false){
        setTimeout(()=>{
            cb({
                nombre:'Andrea',
                apellido:'Camargo'
            });
        },3000);  
    }else{
        cbError(new Error('No se puede obtener los datos'));
    }      
}

const imprimirData=(data)=>console.log(data);
const errorHandler=(error)=>console.log(error);
getData(imprimirData,errorHandler);