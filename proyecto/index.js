/**
 * Aqui se tendrada el inicio del servidor
*/
const express = require('express');
const debug = require('debug')('app:main');

const { Config }= require('./src/config/indexConfig'); //objeto de config que tendra todas las variables
const {ProductsAPI}=require('./src/products/indexProducts');
const {UsersAPI}=require('./src/users/indexUser');

const app = express();
app.use(express.json());

//Modulos
ProductsAPI(app);
UsersAPI(app);

//Escuchando 
app.listen(Config.port,()=>{
    debug(`servidor escuchando en el puerto ${Config.port}`);
});
