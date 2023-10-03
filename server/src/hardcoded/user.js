const { createUserHandler } = require('../controllers/usersControllers');
const { User } = require("../db")
const user = [{
    email: "admin@gmail.com",
    password: "123456",
    role: "admin",
    name: "Fabian",
    surname: "Idarraga",
    phone: "3152235421",
    address: "calle 30 Kra 15 #8",
    gender: "Hombre",
    city: "Kenedy",
    department: "Cundinamarca"
}, {
    email: "usuario@gmail.com",
    password: "abcdef",
    role: "client",
    name: "Carlos",
    surname: "Gomez",
    phone: "3115889778",
    address: "calle 30 Kra 15 #8",
    gender: "Mujer",
    city: "Villeta",
    department: "Cundinamarca"
}];

async function createAdmin() {

    user.forEach(async (us) => {
        const mockRequest = {
            body: us // Simula un cuerpo de solicitud con el objeto de usuario
        };
        const mockResponse = {
            status: function (statusCode) {
                return mockResponse;
            },
            json: function (data) {
                console.log(data);
            }
        };
        try {
            await createUserHandler(mockRequest, mockResponse);
            console.log("Usuario administrador creado con éxito.");
        } catch (error) {
            console.error(error);
            console.log("Error al crear el usuario administrador.");
        }
    })
}



module.exports = {
    createAdmin
}