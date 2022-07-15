/**
 * Estructurar respuestas estandar 
 * para todo lo que se envia desde el API REST
 */

const createError = require('http-errors');//Crear errores o gestionarlos

module.exports.Response ={
    sucess: (res, status=200, message="OK", body={})=>{
        res.status(status).json({message,body});
    },
    error: (res, error=null) =>{
        const {statusCode,message} = error?error:new createError.InternalServerError();//Por defecto va a exportar un error de internal server
        res.status(statusCode).json({message});
    }
}
