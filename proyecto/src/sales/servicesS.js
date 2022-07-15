/**
 * Comunicarse con la base de datos
 */

 const {ObjectId}=require('mongodb');//para la consulta por id

 const {Database} = require('../database');
 const debug=require('debug')('app:databaseventas');
 
 const COLLECTION='sales';
 
 //Funciones CRUD
 
 const getAll= async ()=>{//Todos los datos de la collection ventas
     const collection = await Database(COLLECTION);
     return await collection.find({}).toArray();//Find devuelve un cursor iterable
 }
 
 const getById = async (id) =>{// los datos de un id en especifico
     const collection = await Database(COLLECTION);
     return collection.findOne({_id:ObjectId(id)}); //para establecer una consulta necesita con object id
 }
 
 const create= async (sale)=>{//Crear una venta 
     const collection = await Database(COLLECTION);
     let result = await collection.insertOne(sale);
     return result.insertedId;//retorna el id que se inserto
 } 
 const update = async (id,data)=>{ // actualizar de acuerdo a un ID
     const collection = await Database(COLLECTION);
     let result = await collection.updateOne({_id:ObjectId(id)},{$set:{...data}},{ upsert: true });
     return result;
 }
 
 const deleteUser = async (id) =>{ // Eliminar de acuerdo a un id una venta
     const collection = await Database(COLLECTION);
     let result = await collection.deleteOne({_id:ObjectId(id)});
     return result;
 }
 
 module.exports.UsersService = {
     getAll, //Si no le coloca clave lo toma por defecto el nombre y la clave es el mismo
     getById,
     create,
     update,
     deleteUser
 }