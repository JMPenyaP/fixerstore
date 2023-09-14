const { User } = require("../db");
const userHandler = require('../handlers/usersHandlers');
const bcrypt = require('bcrypt');

//! Crear Usuario Cliente
const createUserHandler = async (req, res) => {
    const { email, password, name, surname, phone, address, neighborhood, department } = req.body;

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'El email ya está registrado' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({ email, password: hashedPassword, name, surname, phone, address, neighborhood, department })
        res.status(201).json({ success: true, message: 'Registro de usuario exitoso' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
}
/* module.exports = {
    register: userHandler.createUserHandler
}; */

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
    getAllUsers,
    getUserByName,
    createUserHandler,
};
