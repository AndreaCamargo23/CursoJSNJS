/**
 * 
 */

const express = require('express');
const {Productscontroller} = require('./controllerP');

const router = express.Router(); //Permite manejar las rutas del modulo independientemente la aplicación

module.exports.ProductsAPI = (app) => {
    //Vamos a recibir la aplicación para enrutar todo lo que necesitaremos en nuestro modulo
    router
    .get('/',Productscontroller.getProducts)//Lo pasamos como cobalt y no como función 
    .get('/report', Productscontroller.generateReport)
    .get('/:id',Productscontroller.getProduct)
    .post('/',Productscontroller.createProduct)
    .put('/:id',Productscontroller.updateProduct)
    .delete('/:id',Productscontroller.deleteProduct);
    //Va a hacer todas las rutas anteriores disponibles para
    //en la variable router, concatenando la URL con la de cada verbo
    app.use('/api/products',router); //Va a configurar una ruta todo el router
}