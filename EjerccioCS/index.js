//Archivo inicial Este seria nuestro cliente
//Al utilizar const para traer paquetes, por ser un paquete no debe modificarse a lo largo del tiempo
const axios = require("axios"); //Traer el paquete necesario, si tiene el simbolo de llaves se sabe que es un paquete
//requiere es una función y recibe como parametro el nombre del paquete que se desea traer

//Se usan para realizar el archivo
const fs=require('fs').promises;//Ayuda a controlar el system del computador
const path=require('path');//Direcciones del computador URLs

/**
 * Axios es asincrono por eso nos retorna unas promesas.
 * Los metodos de axios, son los metodos para el protocolo
 * HTTP
 */

//Funcion principal
/**
 * Se ejecutara cada vez que se llame al archivo index.js
 * Para trabajar con los paquetes axios, se debe declarar la funcion 
 * asincrona para poder ejecutar promes con await
 */
const main = async () => {
    //Realizaremos una petición de tipo get, para consultar algo de nuestro servidor que es el link que se encuentra dentro del metodo
let response = await axios.get("https://rickandmortyapi.com/api/character");
    //Almacenamos la respuesta del servidor en una variable

let {
    data: { results },//De la respuesta voy a sacar resulst 
} = response;

//Obtener unicamente el ID de los personajes y el nombre de los mismos con el array
//que se reesctructuro anteriormente
let character = results
    .map((character) => {
    return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
    };
    })//en el segundo map hace que solo le retornen los valores con el object.values generando un arreglo.
    .map((personaje) => Object.values(personaje).join(","))
    .join('\n');

    //obtener los encabezados
    let headers= Object.keys(results
    .map((character) => {
    return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
    };
    })[0]).join(',');

    //Concatenamos los encabezados con el contenido 
    let texto = headers+'\n'+character;

    //Controlamos la promise con await y utilizamos el pquete fs 
    //Para escribir en el archivo, luego agregamos el path para la direccion de memoria
    await fs.writeFile(path.join(__dirname,'data.csv'),texto);
    
};

main();

var a={};
var b=a;
a.v=1;
b.v=2;
console.log(a.v);

