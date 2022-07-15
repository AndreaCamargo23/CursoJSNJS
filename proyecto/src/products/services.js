/**
 * Comunicarse con la base de datos
 */

const {ObjectId}=require('mongodb');//para la consulta por id

const {Database} = require('../database');
const debug=require('debug')('app:database');
const {ProductsUtils} = require('./utils');

const COLLECTION='products';

//Funciones CRUD

const getAll= async ()=>{//Todos los datos de BD
    debug('Ingresa DB');
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();//Find devuelve un cursor iterable
}

const getById = async (id) =>{
    const collection = await Database(COLLECTION);
    return collection.findOne({_id:ObjectId(id)}); //para establecer una consulta necesita con object id
}

const create= async (product)=>{
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId;//retorna el id que se inserto
}

const generateReport = async (name,res)=>{
    let products = await getAll();
    ProductsUtils.excelGenerator(products,name,res);
}

const update = async (id,data)=>{
    const collection = await Database(COLLECTION);
    let result = await collection.updateOne({_id:ObjectId(id)},{$set:{...data}},{ upsert: true });
    return result;
}

const deletePro = async (id) =>{
    const collection = await Database(COLLECTION);
    let result = await collection.deleteOne({_id:ObjectId(id)});
    return result;
}

module.exports.ProductsService = {
    getAll, //Si no le coloca clave lo toma por defecto el nombre y la clave es el mismo
    getById,
    create,
    generateReport,
    update,
    deletePro
}

