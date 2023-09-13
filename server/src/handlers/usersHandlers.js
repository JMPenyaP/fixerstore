const { getAllUsers, getUserByName } = require("../controllers/usersControllers");

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
    getAllUsersHandler,
};
