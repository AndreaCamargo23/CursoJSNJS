const express = require('express');
const {Salescontroller} = require('./controllerS');

const router = express.Router(); //Permite manejar las rutas del modulo independientemente la aplicación

module.exports.UsersAPI = (app) => {
    //Vamos a recibir la aplicación para enrutar todo lo que necesitaremos en nuestro modulo
    router
    .get('/',Salescontroller.getUsers)//Lo pasamos como cobalt y no como función 
    .get('/:id',Userscontroller.getUser)
    .post('/',Userscontroller.createUser)
    .put('/:id',Userscontroller.updateUser)
    .delete('/:id',Userscontroller.deleteUser);
    //Va a hacer todas las rutas anteriores disponibles para
    //en la variable router, concatenando la URL con la de cada verbo
    app.use('/api/users',router); //Va a configurar una ruta todo el router
}