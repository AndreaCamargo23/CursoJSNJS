/**
 * Archivo principal 
 * Va a contener todo el servidor
 */

const express = require('express');
const Service = require('./src/service');

const app = express();//Crear una aplicación de express
const port = 3000;


/**
 * Rutas que también se conocen como einpoint o puntos finales 
 */

//Permitir recibir datos de tipo json
app.use(express.json());

//Capacidad para que escuhe de acuerdo al verbo de la peticion
app.get('/', (req, res) => {
    res.json({
        message: "Lista de usuarios",
        body: Service.getUsers(),
    });
})

 //Consultas, aqui se consulta por id
app.get('/:id', (req, res) => {
    let id= req.params.id;//Obtener todos los parametros de ruta
    let user = Service.getUser(id);
    res.json({
        message: `Usuario ${id}`,
        body: user,
    });
})

app.post('/',(req,res)=>{
    //Deestructuración de datos 
    let { body: newUser } = req; //sacamos el body de request
    let user = Service.createUser(newUser); //Enviamos datos a nuestro service
    res.status(201).json({
        message: 'Usuario Creado corectamente',
        body: user,
    })
})

app.put('/:id',(req,res)=>{
    let id= req.params.id;//Obtener todos los parametros de ruta
    let {body: updateUser }=req;
    let user = Service.updateUser(id,updateUser);
    res.json({
        message: "¡Usuario editado correctamente!",
        body: user,
    })
})

app.delete('/:id',(req,res)=>{
    let id= req.params.id;//Obtener todos los parametros de ruta
    console.log(id);
    Service.deleteUser(id);
    res.json({
        message: `¡Usuario ${id} eliminado correctamente!`,
    })
})

//Levantar el servidor, para que escuche todas las peticiones.
app.listen(port, () =>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

