const { createUser, getAllUsers, getUserByName } = require("../controllers/usersControllers");

//! Crear Usuarios
const createUsersHandler = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = await createUser(name, email, password);

        res.status(200).json({ success: true, data: newUser });
    } catch (error) {
        res.status(400).json({ success: false, message: "Error creating new User. " + error.message });
    };
};

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
        res.status(400).json({ success: false, message: "Error getting User(s). " + error.message });
    };

};

module.exports = {
    createUsersHandler,
    getAllUsersHandler,
};
