//Archivo inicial Este seria nuestro cliente
//Al utilizar const para traer paquetes, por ser un paquete no debe modificarse a lo largo del tiempo
const axios = require("axios"); //Traer el maquete necesario.
const fs=require('fs').promises;//Paquete viene con las promises 
const path=require('path');

/**
 * Axios es asincrono por eso nos retorna unas promesas.
 * Los metodos de axios, son los metodos para el protocolo
 * HTTP
 */

//Funcion principal
const main = async () => {
let response = await axios.get("https://rickandmortyapi.com/api/character");
let {
    data: { results },
} = response;
let character = results
    .map((character) => {
    return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
    };
    })
    .map((personaje) => Object.values(personaje).join(","))
    .join('\n');
    let headers= Object.keys(results
    .map((character) => {
    return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
    };
    })[0]).join(',');
    let texto = headers+'\n'+character;
    await fs.writeFile(path.join(__dirname,'data.csv'),texto);
    // console.log(__dirname);//La ruta en la que nos encontramos ubicados. 
// console.log(character);
};

main();
