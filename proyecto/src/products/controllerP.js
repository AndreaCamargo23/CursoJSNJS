/**
 * Funciones controladoras de cada petición y respuesta
 */

const {ProductsService} = require('./services');
const {Response} = require('../common/response');
const createError = require('http-errors');

const debug = require('debug')('app:module-products-controller');

module.exports.Productscontroller = {
    getProducts: async  (req,res)=>{
        try{//Se capturar los errores 
            let products = await ProductsService.getAll();
            Response.sucess(res,200,"Lista de productos",products);
        }catch(error){
            debug(error);
            Response.error(res);
        }
    },
    getProduct: async (req,res)=>{
        try{
            const {params: {id}} = req; //del request se obtiene el params y el id
            let product = await ProductsService.getById(id);
            if(!producto){
                Response.error(res, new createError.NotFound);
            }else{
                Response.sucess(res,200,`Producto ${id}`,product);
            }
        }catch(error){
            debug(error);
            Response.error(res);
        }
    },
    createProduct: async (req,res)=>{
        try{
            const {body} = req;
            if(!body||Object.keys(body).length===0){
                Response.error(res,new createError.BadRequest);
            }else{
                const insertedId = await ProductsService.create(body);
                Response.sucess(res,201,"Producto agregdado ",insertedId);
            }
        }catch (error){
            debug(error);
            Response.error(res);
        }
    },
    generateReport: (req,res)=>{
        try{
            ProductsService.generateReport('Inventario',res);
        }catch(error){
            debug(error);
            Response.error(res);
        }
    },
    updateProduct: async (req,res)=>{
        try{
            const {body} = req;
            const {params: {id}} = req; //del request se obtiene el params y el id
            if(!body||Object.keys(body).length===0){
                Response.error(res,new createError.BadRequest);
            }else{
                const updateId = await ProductsService.update(id,body);
                Response.sucess(res,201,"Producto modificado ");
            }
        }catch(error){
            debug(error);
            Response.error(res);
        }
    },
    deleteProduct: async (req,res)=>{
        try{
            const {params: {id}} = req;
            const del = await ProductsService.deletePro(id);
            if(del.deletedCount === 1){
                Response.sucess(res,200,`Producto Eliminado ${id}`,del);
            }else{
                Response.error(res, new createError.NotFound);
            }
        }catch(error){
            debug(error);
            Response.error(res);
        }
    }
};
