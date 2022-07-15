/**
 * Se encarga de manipular todos los datos
 * CRUD
 */
const data = require('./MOCK_DATA.json');//Traer los datos que

//Dessarrollar modulos de node
module.exports = {
    //Funciones para manipular los datos
    getUsers: () => data,
    getUser: (id)=>{
        let identificador= Number(id);
        let user = data.find((person)=>person.id===identificador);
        return user;
    },
    createUser: (dataUser)=>{
        //Datos en memoria volatil
        let newUser = {
            id: data.length+1,
            ...dataUser,
        };
        data.push(newUser);
        return newUser;
    },
    updateUser: (id, datosUser) =>{
        let identificador= Number(id);
        let index = data.findIndex((person)=>person.id===identificador);
        let dtUser={
            id:id,
            ...datosUser,
        }
        data[index]=dtUser;
        return data[index];
    },
    deleteUser: (id)=>{
        let identificador= Number(id);
        let index = data.findIndex((person)=>person.id===identificador);
        data.splice(index, 1);

    }
}