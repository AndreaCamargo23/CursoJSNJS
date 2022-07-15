/**
 * Toda la configuración de nuestras variables de entorno
 */

require('dotenv').config();//Traer todas las variables en el archivo que necesitamos
//Config es la clave de la propiedad
module.exports.Config={
    port:process.env.PORT, //acceder a la variable de entorno
    mongoUri: process.env.MONGO_URI, //
    mongoDbName: process.env.MONGO_DBNAME, //
    
}
