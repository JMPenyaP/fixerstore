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
    name: "Carla",
    surname: "Gomez",
    phone: "3115889778",
    address: "calle 30 Kra 15 #8",
    gender: "Mujer",
    city: "Villeta",
    department: "Cundinamarca"
}, {

    email: "user2@gmail.com",
    password: "123456",
    role: "client",
    name: "Martin",
    surname: "Rodriguez",
    phone: "23123321",
    address: "calle 30 Kra 15 #8",
    gender: "Hombre",
    city: "Kenedy",
    department: "Cundinamarca"


}, {
    email: "maria2@gmail.com",
    password: "123456",
    role: "client",
    name: "Maria",
    surname: "Perez",
    phone: "231232321",
    address: "calle 3 AV 15 #33",
    gender: "Mujer",
    city: "Otro",
    department: "Antioquia"

}, {

    email: "raulcastro@gmail.com",
    password: "123456",
    role: "client",
    name: "Raul",
    surname: "Castro",
    phone: "231232321",
    address: "calle 3 AV 15 #33",
    gender: "Prefiero no decirlo",
    city: "Otro",
    department: "Antioquia"

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