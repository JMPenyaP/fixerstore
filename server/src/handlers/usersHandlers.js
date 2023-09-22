const { getAllUsers, getUserByName, getUserByEmail } = require("../controllers/usersControllers");

//! Obtener todas los Usuarios o uno por nombre
const getAllUsersHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const userByName = await getUserByName(name);
            res.status(200).json({ success: true, data: userByName });
        } else {
            const response = await getAllUsers();
            res.status(200).json({ success: true, data: response });
        }
    }
    catch (error) {
        res.status(400).json({ success: false, message: "Error obteniendo datos de Usuarios. " + error.message });
    };

};

//! Obtener usuario por Email y devolver Rol
const getUserEmailHandler = async (req, res) => {
    const { email } = req.query;
    try {
        const user = await getUserByEmail(email);
        if (user) {
            res.status(200).json({ success: true, message: "Email encontrado.", userdata: user });
        }
        else if (user === false) {
            res.status(201).json({ success: false, message: "Email No Encontrado" });
        }

    } catch (error) {
        res.status(201).json({ success: false, message: "Email NO está registrado." });
    }
}

module.exports = {
    getAllUsersHandler,
    getUserEmailHandler,
};