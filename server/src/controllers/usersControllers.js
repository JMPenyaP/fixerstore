const { User } = require("../db");

//! Crear Usuario
const createUser = async (name, email, password) => {
    return await User.create({ name, email, password });
};

//! Obtener todos los Usuarios
const getAllUsers = async () => {
    const allUsers = await User.findAll();
    return allUsers;
};

//! Obtener Usuario por Nombre
const getUserByName = async (name) => {
    const userName = await User.findAll({ where: { name: name } });
    return userName;
};

module.exports = {
    createUser,
    getAllUsers,
    getUserByName,
};
