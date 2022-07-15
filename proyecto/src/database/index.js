/**
 * Se encarga de exportar una funcion que
 * retorne la conexion a una base de datos
 */

const { MongoClient } = require("mongodb"); //Patron Cliente servidor, con patrones de bd
const debug = require("debug")("app:module-database");

const {Config} = require('../config/indexConfig');

var connection=null;

/**
 * Se exporta esta propiedad que contiene Database,
 * que tiene una función que retorna una promise.
 * @param {} collection Coleccion a la que se quiere realizar la conexion
 * @returns promise
 */
//Pediremos la collection a la que queremos acceder
module.exports.Database = (collection) => new Promise( async (resolve, reject) => {
    //codigo para conectarse a la base de datos genera una nueva conexion
    try{
        if(!connection){//Si no existe una conexion
            const client = new MongoClient(Config.mongoUri);//Crear un nuevo cliente
            connection = await client.connect();
            debug('Nueva Conexion realizada con MongoDB Atlas');
        }else{
            debug('Reutilizando conexion');
        }
        const db=connection.db(Config.mongoDbName); //almacenar la base de datos que retorna
        resolve(db.collection(collection)); //Nos devuelva la coleccion que nos solicitan
    } catch(error){
        reject(error);
    }
});
