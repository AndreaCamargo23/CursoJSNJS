/**
 * Funciones controladoras de cada petición y respuesta
 */

const { UsersService } = require("./servicesU");
const { Response } = require("../common/response");
const createError = require("http-errors");

const debug = require("debug")("app:module-users-controller");

module.exports.Userscontroller = {
    getUsers: async (req, res) => {
        try {
            //Se capturar los errores
            let users = await UsersService.getAll();
            Response.sucess(res, 200, "Lista de Usuarios", users);
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    getUser: async (req, res) => {
    try {
      const {
        params: { id },
      } = req; //del request se obtiene el params y el id
      let user = await UsersService.getById(id);
      if (!user) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.sucess(res, 200, `Usuario ${id}`, user);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  createUser: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedId = await UsersService.create(body);
        Response.sucess(res, 201, "Usuario agregdado ", insertedId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  updateUser: async (req, res) => {
    try {
      const { body } = req;
      const {
        params: { id },
      } = req; //del request se obtiene el params y el id
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const updateId = await UsersService.update(id, body);
        Response.sucess(res, 201, "Usuario modificado ");
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      const del = await UsersService.deleteUser(id);
      if (del.deletedCount === 1) {
        Response.sucess(res, 200, `Usuario Eliminado ${id}`, del);
      } else {
        Response.error(res, new createError.NotFound());
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
};
